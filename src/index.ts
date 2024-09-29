import {
  getCookie,
  getLocalStorage,
  initiateLocalStorage,
  removeSupportQueryParam,
  setCookie,
  updateLocalStorage,
} from "$utils/cookies";
import { createSupportWidget } from "$utils/widget";

window.Webflow ||= [];
window.Webflow.push(() => {
  // Check for the presence of a support cookie
  const supportStorage = getLocalStorage();

  // If the cookie exists and is set to "true", remove the "support" query parameter and display the widget
  if (supportStorage) {
    removeSupportQueryParam();
    createSupportWidget();
  } else {
    // Check if the URL contains the query parameter "support"
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("support")) {
      // Set the cookie with a 7-day expiration
      initiateLocalStorage();

      // Remove the "support" query parameter and display the widget
      removeSupportQueryParam();
      createSupportWidget();
    }
  }
  if (supportStorage === "true") {
    const widget = document.getElementById("ns-widget-icon");
    if (widget) {
      widget.click();
      updateLocalStorage();
    }
  }
});
