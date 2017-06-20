import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'
import merge from 'lodash/merge'
import concat from 'lodash/concat'
import { autorun } from 'mobx'

let confim = { }

extendObservable(confim, {
  // show: true,
  show: false,
  title: "",
  message: "",
  okButton: "",
  cancelButton: "",
  onAction: "",
})

Object.assign(confim, {

  handleShow(attributes = {}) {
    merge(this, merge(attributes, {show: true}) )
  },

  handleClose() {
    this.show = false
  },

  handleAction() {
    this.handleClose()
    this.onAction()
    return true
  },

})

export default bindAll(confim, [
  "handleShow",
  "handleClose",
  "handleAction",
])
