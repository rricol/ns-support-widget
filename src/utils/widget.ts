// widget functions

import { deleteCookie } from "./cookies";

// Utility to gather browser, device, and page info
// Utility to gather browser, device, and page info
export function getSystemInfo(): { device: string; browser: string; url: string } {
  const device = navigator.userAgent;
  const url = window.location.href;

  // Replace deprecated appName with userAgent for browser detection
  const browser = navigator.userAgent; // Use userAgent instead of appName

  return {
    device,
    browser,
    url,
  };
}

// Function to make the widget draggable
function makeDraggable(dropdown: HTMLElement): void {
  let isDragging: boolean = false;
  let offsetX: number;
  let offsetY: number;

  dropdown.addEventListener("mousedown", (e: MouseEvent) => {
    isDragging = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  });

  document.addEventListener("mousemove", (e: MouseEvent) => {
    if (isDragging) {
      dropdown.style.top = `${e.clientY - offsetY}px`;
      dropdown.style.left = `${e.clientX - offsetX}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

// Function to create the widget UI
export function createSupportWidget(): void {
  const dropdown: HTMLDivElement = document.createElement("div");
  dropdown.id = "supportDropdown";
  dropdown.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      width: 200px;
      padding: 10px;
      background: #f9f9f9;
      border: 1px solid #ccc;
      z-index: 1000;
      cursor: move;
    `;

  // Add content to the dropdown
  dropdown.innerHTML = `
  <div style="text-align: right;">
    <button id="closeButton" style="background: none; border: none; font-size: 16px; cursor: pointer;">✖</button>
  </div>
  <strong>Need Support?</strong><br>
  <a href="#" id="ticketLink">Create Ticket</a><br>
  <a href="#" id="emailLink">Email Support</a>
`;

  document.body.appendChild(dropdown);

  makeDraggable(dropdown);

  // Handle the close button click event
  const closeButton: HTMLButtonElement | null = document.getElementById("closeButton") as HTMLButtonElement;
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      dropdown.remove(); // Remove the widget from the DOM
      deleteCookie("__Support-ns");
    });
  }

  // Handle Create Ticket (form link)
  const ticketLink: HTMLAnchorElement | null = document.getElementById("ticketLink") as HTMLAnchorElement;
  if (ticketLink) {
    ticketLink.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();

      const { device, browser, url } = getSystemInfo();
      const formUrl: string = `https://example.com/ticket-form?device=${encodeURIComponent(device)}&browser=${encodeURIComponent(browser)}&url=${encodeURIComponent(url)}`;

      window.open(formUrl, "_blank");
    });
  }

  // Handle Email Support link
  const emailLink: HTMLAnchorElement | null = document.getElementById("emailLink") as HTMLAnchorElement;
  if (emailLink) {
    emailLink.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();

      const { device, browser, url } = getSystemInfo();
      const subject: string = `Support Request - Browser: ${browser}`;
      const body: string = `Device: ${device}\nBrowser: ${browser}\nCurrent Page: ${url}\n\nPlease describe your issue:`;
      const mailtoLink: string = `mailto:support@numera.swiss?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.open(mailtoLink, "_blank");
    });
  }
}
