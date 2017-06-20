import { extendObservable, transaction } from 'mobx'
import bindAll from 'lodash/bindAll'

let sidebar = { }

extendObservable(sidebar, {
  name: "",
})

Object.assign(sidebar, {

  setName(name) {
    this.name = name
  },

})

export default bindAll(sidebar, [
  "setName",
])
