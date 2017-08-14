// import { connect } from 'react-redux'
// import { success } from 'actions/notification'
// this.props.dispatch(success("message"))
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

  error(message) {
    return errorNotification({
      message,
      position: "br",
      level: 'error'
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

}
