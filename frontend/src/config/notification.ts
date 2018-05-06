// import Notification from 'src/config/notification'
// Notification.success("")
// Notification.error("")
// Notification.info("")
// Notification.warning("")

import UIStore from "src/store"

export default {

  success(message: string) {
    UIStore.notificationSystem.addNotification({
      message,
      position: "br",
      level: 'success'
    })
  },

  info(message: string) {
    UIStore.notificationSystem.addNotification({
      message,
      position: "br",
      level: 'info'
    })
  },

  warning(message: string) {
    UIStore.notificationSystem.addNotification({
      message,
      position: "br",
      level: 'warning',
    });
  },

  error(message: string) {
    UIStore.notificationSystem.addNotification({
      title: 'An error occured',
      message,
      position: "br",
      level: 'error'
    })
  },

}
