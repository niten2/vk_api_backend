import 'jest-enzyme'
import jestFetchMock from 'jest-fetch-mock'
import settings from 'lib/settings'

class LocalStorageMock {
  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key) {
    return this.store[key] || null
  }

  setItem(key, value) {
    this.store[key] = value.toString()
  }

  removeItem(key) {
    delete this.store[key]
  }

  setToken(value) {
    this.store[settings.auth_session_storage_key] = value.toString()
  }

  getToken() {
    return this.store[settings.auth_session_storage_key]
  }
}

global.localStorage = new LocalStorageMock

global.fetch = jestFetchMock

global.mockResponse = (args) => {
  jestFetchMock.mockResponse(JSON.stringify(args))
}
