// lib/api.ts
const API_URL = "https://api.flappy.digital/api"
export const IMG_URL = "https://api.flappy.digital/storage/"
async function request(path: string, options: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
  const headers = new Headers(options.headers)

  if (token) {
    headers.set("Authorization", `Bearer ${token}`)
  }
  headers.set("Accept", "application/json")

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `API error ${res.status}`)
  }

  return res.json()
}

export const api = {
  // ---------- AUTH ----------
  auth: {
    discordUrl() {
      return request("/auth/discord/url")
    },
    discordCallback(code: string) {
      return request("/auth/discord/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
    },
    me: async () => {
        const res = await fetch(`${API_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
      },
  
      isAdmin: async () => {
       
        try {
          const user = await api.auth.me(); console.log(user)
          return user?.is_admin == true;
        } catch {
          return false;
        }
      },
    logout() {
      localStorage.removeItem("auth_token")
      document.cookie = "auth_token=; Max-Age=0; Path=/"
    },
  },

  // ---------- GIVEAWAYS ----------
  giveaways: {
    list() {
        return request("/giveaways").then(res => Array.isArray(res) ? res : res.data || []);
    },
    create(data: FormData) {
      return request("/giveaways", {
        method: "POST",
        body: data,
      })
    },
    update(id: number, data: FormData) {
      return request(`/giveaways/${id}`, {
        method: "POST",
        body: data,
      })
    },
    end(id: number){
      return request(`/giveaways/${id}/end`, {
        method: "POST",
      })
    },
    delete(id: number) {
      return request(`/giveaways/${id}`, {
        method: "DELETE",
      })
    },
  },

  entries: {
    list() {
      return request("/entries")
    },
    verify(id: number) {
      return request(`/entries/${id}/verify`, {
        method: "PATCH",
      })
    },
    create(data: FormData) {
      return request("/entries", {
        method: "POST",
        body: data,
      })
    },
  },
}
