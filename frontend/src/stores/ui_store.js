// import { UIStore } from 'stores'
import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'

// import search from './ui_store/search'
// import validate from './ui_store/validate'
// import sidebar from './ui_store/sidebar'
// import confim from './ui_store/confim'

let UIStore  = {
  notificationSystem: null,
  // email: "mail@example.com",
}

extendObservable(UIStore, {
  modalOk: false,
  modalForm: false,
  login: false,
  // loading: false,
  // fobbiden: false,
  group_ids: [],
  user_ids: [],
  loading: false,
})

Object.assign(UIStore, {

  setLogin() {
    this.login = true
  },

  setLogout() {
    this.login = false
  },
  // loading
  // showModalOk() {
  //   this.modalOk = true
  // },

  // hideModalOk() {
  //   this.modalOk = false
  // },

  // showModalForm() {
  //   this.modalForm = true
  // },

  // hideModalForm() {
  //   this.modalForm = false
  // },

})

// UIStore.validate = validate
// UIStore.sidebar = sidebar
// UIStore.search = search
// UIStore.confim = confim

export default bindAll(UIStore, [
  "setLogin",
  "setLogout",
])
