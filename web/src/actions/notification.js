// import { connect } from 'react-redux'
// import Notification from 'actions/notification'
// this.props.dispatch(Notification.success("message"))
// this.props.dispatch(Notification.error("message"))
// export default connect()(Container)
import {
  success as successNotification,
  error as errorNotification,
  warning as warningNotification,
  info as infoNotification,
} from 'react-notification-system-redux'

export default {

  success(message) {
    return successNotification({
      message,
      position: "br",
      level: 'success'
    })
  },

  warning(message) {
    return warningNotification({
      message,
      position: "br",
      level: 'warning'
    })
  },

  info(message) {
    return infoNotification({
      message,
      position: "br",
      level: 'info'
    })
  },

  error(message) {
    return errorNotification({
      message,
      position: "br",
      level: 'error'
    })
  },

  errors(errors = []) {
    if (errors.length === 1) {
      this.error(errors[0])
      return
    }

    errors = errors.reduce((message, error) => {
      return message + error
    }, '')

    this.error(errors)
  }
}
