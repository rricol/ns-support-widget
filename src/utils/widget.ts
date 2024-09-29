import UAParser from "ua-parser-js";
import { removeLocalStorage, updateLocalStorage } from "./cookies";

// Utility to gather browser, device, and page info
export function getSystemInfo(): { device: string; browser: string; os: string; url: string; domain: string } {
  const parser = new UAParser();
  const result = parser.getResult();

  const deviceType = result.device.type ? result.device.type : "desktop"; // Default to 'desktop' if not defined
  const browser = `${result.browser.name} ${result.browser.version}`;
  const os = `${result.os.name} ${result.os.version}`;
  const url = window.location.href;

  // Create a URL object to extract the hostname
  const domain = new URL(url).hostname.replace(/^www\./, ""); // Remove 'www.' if present

  return {
    device: deviceType,
    browser: browser,
    os: os,
    url: url,
    domain: domain,
  };
}

export function createSupportWidget(): void {
  const { device, browser, os, url, domain } = getSystemInfo();

  const subject: string = `Support Request - ${domain}`; // Use only the clean domain in the subject line
  const body: string = `
    \n\n
    ----------------------------------------\n
    Device: ${device}
    OS: ${os}
    Browser: ${browser}
    Page: ${url}\n
    ----------------------------------------\n
    `;
  const mailtoLink: string = `
    mailto:support@numera.swiss?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}
    `;
  const sysinfo: string = `
    Device: ${device}
    OS: ${os}
    Browser: ${browser}
    Page: ${url}\n
    `;

  const widgetHTML = `
    <style>
        .ns-widget-wrapper {
            overflow: hidden;
        }
        .ns-widget {
            position: fixed;
            bottom: 0;
            right: -300px; /* Initially hidden, placed off-screen */
            top: 0;
            width: 300px;
            background-color: #222222;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            transition: right 0.3s ease-in-out; /* Smooth slide */
        }
        .ns-widget.open {
            right: 0; /* Slide in */
        }
        .ns-widget-header {
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            padding: 0 0 1rem 0;
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            flex-shrink: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .ns-widget-content-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-items: center;
            padding: 0.5rem 1rem;
            text-align: center;
            background-color: transparent;
            border-radius: 5px;
            border: 1px solid rgba(255, 255, 255, 0.5);
            text-decoration: none;
            color: rgba(255, 255, 255, 0.8);
        }
        .ns-widget-content-link:hover {
            background-color: #000000;
            color: white;
        }
        .ns-widget-content {
            flex-grow: 1;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        }
        .ns-widget-content-header {
            padding: 0 0 0.5rem 0;
            font-size: 0.875rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
        }
        .ns-widget-content-body {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        .ns-widget-footer {
            border-top: 1px solid rgba(255, 255, 255, 0.25);
            padding: 1rem 0 0 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
            margin-top: auto;
        }
        .ns-widget-version {
            padding: 0.5rem 0;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            text-align: center;
            flex-shrink: 0;
        }
        .ns-widget-toggle {
            position: absolute;
            bottom: 2rem;
            right: 100%;
            padding: 0.5rem;
            background-color: #222222;
            color: white;
            border: none;
            width: 2rem;
            height: 2rem;
            border-radius: 50% 0 0 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10000; /* Ensure it appears above other elements */
        }
        .ns-support-close {
            padding: 0.5rem 1rem;
            border-radius: 5px;
            text-decoration: none;
            background-color: #ff000088;
            color: white;
            width: 100%;
        }
        .ns-support-close:hover {
            background-color: #ff000099;
        }
        .ns-widget-container {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 9999;
        color: white;
        }
        .ns-widget-version {
        padding: 0.5rem 0;
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        flex-shrink: 0;
        }
        .ns-widget-close {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        font-size: 1rem;
        }
        #ns-fillout-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        #ns-content-target {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            width: 100%;
            height: 100%;
        }
        .ns-widget-toggle svg {
            rotate: 180deg;
            transition: transform 0.3s;
        }
        .ns-widget-toggle.open svg {
            transform: rotate(180deg);
        }
        .ns-sys-info {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 0.25rem;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            margin-bottom: 1rem;
        }
        .ns-sys-row {
            display: flex;
            justify-content: space-between;
        }
        #close-form {
            cursor: pointer;
            padding: 0.5rem 0;
            border-radius: 5px;
            text-decoration: underline;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.5);
            width: 100%;
            text-align: right;
            margin-left: auto;
        }
    </style>

    <div class="ns-widget-wrapper">
      <div id="widget" class="ns-widget">
        <div id="widget-header" class="ns-widget-header">
          <div id="ns-widget-title">Numera support</div>
          <div class="ns-widget-close ns-toggle">X</div>
        </div>
        <div class="ns-widget-content">
          <div class="ns-widget-content-header">
            <div class="ns-widget-content-title">Vous rencontrez un problème avec votre site ?</div>
          </div>
          <div class="ns-widget-content-body">
            <button id="formButton" class="ns-widget-content-link">
                <span>Créer un ticket</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>ticket</title><g fill="currentColor"><path d="M19,18.75H5A1.76,1.76,0,0,1,3.25,17V14.5A.76.76,0,0,1,4,13.75a1.75,1.75,0,0,0,0-3.5.76.76,0,0,1-.75-.75V7A1.76,1.76,0,0,1,5,5.25H19A1.76,1.76,0,0,1,20.75,7V9.5a.76.76,0,0,1-.75.75,1.75,1.75,0,0,0,0,3.5.76.76,0,0,1,.75.75V17A1.76,1.76,0,0,1,19,18.75ZM4.75,15.16V17a.25.25,0,0,0,.25.25H19a.25.25,0,0,0,.25-.25V15.16a3.25,3.25,0,0,1,0-6.32V7A.25.25,0,0,0,19,6.75H5A.25.25,0,0,0,4.75,7V8.84a3.25,3.25,0,0,1,0,6.32Z" id="1710274802976-2442731_ticket"></path></g></svg>
            </button>
            <a class="ns-widget-content-link" href="${mailtoLink}">
                <span>Contacter le support</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>envelope</title><g fill="currentColor"><path d="M19,4.25H5A1.76,1.76,0,0,0,3.25,6V18A1.76,1.76,0,0,0,5,19.75H19A1.76,1.76,0,0,0,20.75,18V6A1.76,1.76,0,0,0,19,4.25ZM5,5.75H19a.25.25,0,0,1,.25.25V7.54L12,11.16,4.75,7.54V6A.25.25,0,0,1,5,5.75Zm14,12.5H5A.25.25,0,0,1,4.75,18V9.21l6.91,3.46a.76.76,0,0,0,.68,0l6.91-3.46V18A.25.25,0,0,1,19,18.25Z" id="1710274802992-1148876_envelope"></path></g></svg>
            </a>
          </div>
          <div id="ns-content-target">
          </div>
        </div>
        <div class="ns-widget-footer">
          <div class="ns-sys-info">
            <div class="ns-sys-row"><span> device:</span><span>${device} </span></div>
            <div class="ns-sys-row"><span> browser:</span><span>${browser} </span></div>
            <div class="ns-sys-row"><span> os:</span><span>${os} </span></div>
          </div>
          <button class="ns-support-close">Quitter le mode support</button>
        </div>
        <div class="ns-widget-version">v1.0.0</div>
        <button id="ns-widget-icon" class="ns-widget-toggle ns-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
    `;

  // Inject the widget into the body
  const widgetContainer = document.createElement("div");
  widgetContainer.innerHTML = widgetHTML;
  widgetContainer.id = "widget-container";
  document.body.appendChild(widgetContainer);

  // Add event listeners for toggle and close buttons after injecting the widget
  const widget = document.getElementById("widget");
  const toggleBtn = document.querySelectorAll(".ns-toggle");
  const closeButton = document.querySelector(".ns-support-close");
  const toggleIcon = document.getElementById("ns-widget-icon");
  const formButton = document.querySelector("#formButton");

  formButton?.addEventListener("click", () => {
    const filloutForm = document.getElementById("ns-fillout-wrapper");
    const fillout = document.querySelector("script[src='https://server.fillout.com/embed/v1/']");
    filloutForm?.remove();
    fillout?.remove();
    const widgetTarget = document.getElementById("ns-content-target");
    const formContainer = document.createElement("div");
    formContainer.id = "ns-fillout-wrapper";
    formContainer.innerHTML = `
        <div style="width:100%;height:100%;" data-fillout-id="n7MAk6Mrhdus" data-inst="${domain}" data-sysinfo="${sysinfo}" data-src="WF Embed Support" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
        <span id="close-form" >fermer</span>
        `;
    widgetTarget?.appendChild(formContainer);

    // Now dynamically inject the script and ensure it runs
    const filloutScript = document.createElement("script");
    filloutScript.src = "https://server.fillout.com/embed/v1/";
    document.body.appendChild(filloutScript);

    const closeForm = formContainer.querySelector("#close-form");
    closeForm?.addEventListener("click", () => {
      formContainer.remove();
      filloutScript.remove();
    });
  });

  // Toggle the widget open/close
  toggleBtn?.forEach((btn) => {
    btn.addEventListener("click", () => {
      widget?.classList.toggle("open"); // Add or remove the 'open' class
      toggleIcon?.classList.toggle("open"); // Rotate the arrow icon
      updateLocalStorage();
    });
  });

  // Close the widget when "X" or "Quitter le mode support" is clicked
  closeButton?.addEventListener("click", () => {
    widgetContainer.remove();
    removeLocalStorage();
  });
}
