import { getCookie, setCookie } from "$utils/cookies";
import { createSupportWidget } from "$utils/widget";

window.Webflow ||= [];
window.Webflow.push(() => {
  // Check for the presence of a support cookie
  const supportCookie = getCookie("__Support-ns");

  if (!supportCookie) {
    // Check if the URL contains the query parameter "support"
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("support")) {
      // Set the cookie with a 7-day expiration
      setCookie("__Support-ns", "true", 7);

      // Display the support widget
      createSupportWidget();
    }
  }
});
