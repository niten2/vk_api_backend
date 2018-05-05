import { extendObservable } from 'mobx'

let UIStore  = {
  notificationSystem: {
    addNotification: (options: any): any => {
      console.log("[NOTIFICATION]", options.message)
    }
  },
}

extendObservable(UIStore)

export default UIStore
