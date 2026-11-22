const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }

  return data;
}

export const api = {
  listArticles: () => request("/articles"),
  getArticle: (slug) => request(`/articles/${slug}`),

  login: (password) =>
    request("/auth/login", { method: "POST", body: JSON.stringify({ password }) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  me: () => request("/auth/me"),

  listAdminArticles: () => request("/admin/articles"),
  getAdminArticle: (id) => request(`/admin/articles/${id}`),
  createArticle: (payload) =>
    request("/articles", { method: "POST", body: JSON.stringify(payload) }),
  updateArticle: (id, payload) =>
    request(`/articles/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteArticle: (id) => request(`/articles/${id}`, { method: "DELETE" }),
};
