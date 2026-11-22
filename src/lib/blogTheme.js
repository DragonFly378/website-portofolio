const STORAGE_KEY = "blog-theme";

export function getStoredBlogTheme() {
  if (typeof window === "undefined") return "auto";
  return localStorage.getItem(STORAGE_KEY) || "auto";
}

export function applyBlogTheme(theme) {
  document.documentElement.setAttribute("data-blog-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}
