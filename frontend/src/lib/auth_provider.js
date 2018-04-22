// import authProvider from "utils/auth_provider"
import settings from "lib/settings"

class AuthProvider {

  constructor() {
    this.storage = this._supportsHtml5Storage() ? localStorage : null
  }

  _supportsHtml5Storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null
    } catch (e) {
      return false
    }
  }

  fetchToken() {
    const token = this.storage && this.storage.getItem(settings.auth_session_storage_key)
    return `Bearer ${token}`
  }

  token() {
    const token = this.storage && this.storage.getItem(settings.auth_session_storage_key)
    return token
  }

  saveToken(token) {
    if (!this.storage || !token) { return null }
    this.storage.setItem(settings.auth_session_storage_key, token)
  }

  removeToken() {
    if (!this.storage) return null
    this.storage.removeItem(settings.auth_session_storage_key)
  }

  hasLogin() {
    return this.token() != null
  }

}

export default new AuthProvider()
