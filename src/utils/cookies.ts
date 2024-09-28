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
