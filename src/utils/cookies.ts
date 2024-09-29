import { createSupportWidget } from "./widget";

// Utility function to get a cookie value by name
export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
  const cookieValue = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return cookieValue ? cookieValue.split("=")[1] : null;
}

// Utility function to set a cookie with an expiration in days and optional path
export function setCookie(name: string, value: string, days: number, path: string = "/"): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}; Secure; SameSite=Strict`;
}

// Utility function to delete a cookie by name
export function deleteCookie(name: string, path: string = "/"): void {
  // Set the cookie's expiration date to a time in the past to delete it
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; Secure; SameSite=Strict`;
}

export function removeSupportQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("support")) {
    urlParams.delete("support");
    const params = urlParams.toString();
    const newUrl = params === "" ? window.location.pathname : `${window.location.pathname}?${params}`;
    window.history.replaceState(null, "", newUrl);

    // Optionally update the URL if necessary
    if (window.location.href !== newUrl) {
      window.location.href = newUrl;
    }
  }
}

export function initiateLocalStorage(): void {
  if (!localStorage.getItem("__Support-ns")) {
    localStorage.setItem("__Support-ns", "false");
  }
}

export function getLocalStorage(): string | null {
  return localStorage.getItem("__Support-ns");
}

export function removeLocalStorage(): void {
  localStorage.removeItem("__Support-ns");
}

export function updateLocalStorage(): void {
  if (localStorage.getItem("__Support-ns") === "true") {
    localStorage.setItem("__Support-ns", "false");
  } else {
    localStorage.setItem("__Support-ns", "true");
  }
}
