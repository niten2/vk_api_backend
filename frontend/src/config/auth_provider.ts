import settings from "src/config/settings"

const storageKey = settings.auth_session_storage_key

class AuthProvider  {
  fetchToken(): string | null {
    const token = localStorage.getItem(storageKey)

    if (token) {
      return `Bearer ${token}`
    } else {
      return null
    }
  }

  token(): string | null {
    const token = localStorage.getItem(storageKey)

    return token
  }

  saveToken(token: string): boolean {
    localStorage.setItem(storageKey, token)

    return true
  }

  removeToken(): boolean {
    localStorage.removeItem(storageKey)
    return true
  }

  hasLogin(): boolean {
    return this.token() != null
  }

  isAdmin(): boolean {
    const role = localStorage.getItem(settings.auth_session_storage_key_role)

    return role === "admin"
  }
}

export default new AuthProvider()
