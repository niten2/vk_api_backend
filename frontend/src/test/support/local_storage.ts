export default class LocalStorageMock {
  store: any

  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key: any): any {
    return this.store[key] || null
  }

  setItem(key: any, value: any) {
    this.store[key] = value.toString()
  }

  removeItem(key: any) {
    delete this.store[key]
  }

  setToken(): any {
    return null
  }

  getToken(): any {
    return this.store.auth_session_storage_key
  }
}
