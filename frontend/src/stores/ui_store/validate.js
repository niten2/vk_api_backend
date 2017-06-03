import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'

let validate = { }

extendObservable(validate, {
  canSubmit: false,
})

Object.assign(validate, {

  setEnableButton() {
    this.canSubmit = true
  },

  setDisableButton() {
    this.canSubmit = false
  },

  setDefault() {
    this.canSubmit = false
  },

})

export default bindAll(validate, [
  "setEnableButton",
  "setDisableButton",
  "setDefault",
])
