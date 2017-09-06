import 'jest-enzyme'

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   clear: jest.fn()
// }

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    console.log(111)
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock;



// global.localStorage = localStorageMock

