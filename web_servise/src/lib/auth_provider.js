// import authProvider from 'lib/auth_provider'
import { UIStore } from 'stores'
import Notification from 'lib/notification'

const AUTH_SESSION_STORAGE_KEY = 'smm-crm-system'

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
    const token = this.storage && this.storage.getItem(AUTH_SESSION_STORAGE_KEY)
    return `Bearer ${token}`
  }

  token() {
    const token = this.storage && this.storage.getItem(AUTH_SESSION_STORAGE_KEY)
    return token
  }

  saveToken(token) {
    if (!this.storage) return null
    if (!token) return null

    this.storage.setItem(AUTH_SESSION_STORAGE_KEY, token)
    UIStore.setLogin()
    Notification.success("You Logout")
  }

  removeToken() {
    if (!this.storage) return null
    this.storage.removeItem(AUTH_SESSION_STORAGE_KEY)
    UIStore.setLogout()
  }

  hasLogin() {
    return this.token() != null
  }

  checkAuth() {
    if (this.hasLogin()) {
      UIStore.setLogin()
    }
  }

}

const authProvider = new AuthProvider()
export default authProvider
