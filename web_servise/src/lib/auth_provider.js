// import authProvider from 'lib/auth'
// import { API } from 'mobx-model'
// import { autorun } from 'mobx'
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

  saveToken(token) {
    if (!this.storage) return null

    if (token) {
      this.storage.setItem(AUTH_SESSION_STORAGE_KEY, token)
    }
  }
  removeToken() {
    if (!this.storage) return null
    this.storage.removeItem(AUTH_SESSION_STORAGE_KEY)
  }

  hasLogin() {
    return this.fetchToken() != null
  }

  logout () {
    this.removeToken()
    UIStore.setLogout()
    Notification.success("You Logout")
  }

  // reloadPage(forceGet) {
  //   location.reload(forceGet)
  // }

  // locateTo(url) {
  //   location = url
  // }

  login(token) {
    this.saveToken(token)
    UIStore.setLogin()

    // return API.request({
    //   method: 'post',
    //   endpoint: ENDPOINT_LOGIN,
    //   data: attributes,
    //   onSuccess: (response) => {
    //     this.saveToken(response.body.token)
    //   },
    // })
  }

  checkAuth() {
    if (this.hasLogin()) {
      UIStore.setLogin()
    }
  }

  // checkAuth (cbSuccess, cbFail) {
  //   if (!cbSuccess || !cbFail) {
  //     throw new Error('Please provide cbSucess and cbFail callbacks for checkAuth(cbSuccess, cbFail) of AuthModel class');
  //   }

  //   // if pathname include auth
  //   const include_auth = includes(split(location.href, "/"), "auth")
  //   if (include_auth) { return cbFail() }

  //   const token = this.fetchToken()
  //   if (!token) {
  //     return cbFail()
  //   }

  //   return API.request({
  //     method: 'put',
  //     endpoint: ENDPOINT_REFRESH_TOKEN,
  //     data: { session_token: token },
  //     onSuccess: (response) => {
  //       this.saveToken(response.body.user-token)
  //       cbSuccess({ profile: response.body })
  //     },
  //     onError: () => cbFail()
  //   })
  // }

  // resetPassword({email}, callback) {
  //   if (!callback) throw new Error('Please provide callback for resetPassword() of AuthModel class')

  //   return API.request({
  //     method: 'post',
  //     endpoint: ENDPOINT_AUTH_RESET_PASSWORD,
  //     data: { email },
  //     onSuccess: (response) => {
  //       callback(null, true)
  //     },
  //     onError: (errors) => callback(errors.body.error.message),
  //   })
  // }

  // updatePassword(attributes = {}) {
  //   let { email, code, password } = attributes
  //   return API.request({
  //     method: 'post',
  //     endpoint: ENDPOINT_PASSWORD,
  //     data: {
  //       "email": email,
  //       "new_password": password,
  //       "code": code,
  //     },
  //   })
  // }

  // createPassword(attributes = {}) {
  //   let { email, code, password } = attributes
  //   return API.request({
  //     method: 'post',
  //     endpoint: ENDPOINT_PASSWORD,
  //     data: {
  //       "email": email,
  //       "new_password": password,
  //       "code": code,
  //     },
  //   })
  // }

}

const authProvider = new AuthProvider()
export default authProvider
