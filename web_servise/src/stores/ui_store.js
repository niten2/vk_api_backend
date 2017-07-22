// import { UIStore } from 'stores'
import { extendObservable } from 'mobx'
import bindAll from 'lodash/bindAll'

let UIStore  = {
  notificationSystem: null,
  // email: "mail@example.com",
}

extendObservable(UIStore, {

  sidebar: true,
  login: false,
})

Object.assign(UIStore, {

  setLogin() {
    this.login = true
  },

  setLogout() {
    this.login = false
  },

})

export default bindAll(UIStore, [
  "setLogin",
  "setLogout",
])
