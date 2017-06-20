// import Notification from 'notification'
// Notification.success("")
// Notification.info("")
// Notification.warning("")
// Notification.errors("")

import { UIStore } from 'stores'

export default {

  success(message = '') {
    UIStore.notificationSystem.addNotification({
      message,
      // position: "tc",
      position: "br",
      level: 'success'
    });
  },

  info(message = '') {
    UIStore.notificationSystem.addNotification({
      message,
      position: "br",
      // position: "tc",
      level: 'info'
    });
  },

  warning(message = '') {
    UIStore.notificationSystem.addNotification({
      message,
      // position: "tc",
      position: "br",
      level: 'warning',
    });
  },

  error(message = '') {
    UIStore.notificationSystem.addNotification({
      title: 'An error occured',
      message,
      // position: "tc",
      position: "br",
      level: 'error'
    });
  },

  errors(errors = []) {
    if (errors.length === 1) {
      this.error(errors[0]);
      return
    }

    errors = errors.reduce((message, error) => {
      return message + '<li>'+error+'</li>';
    }, '');

    let message = '<ul>'+errors+'</ul>';

    UIStore.notificationSystem.addNotification({
      title: 'Following errors occured',
      message,
      level: 'error'
    });
  }

}

