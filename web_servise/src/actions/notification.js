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

export const success = (message) => {
  return successNotification({
    message,
    position: "br",
    level: 'success'
  })
}

export const error = (message) => {
  return errorNotification({
    message,
    position: "br",
    level: 'error'
  })
}

export const warning = (message) => {
  return warningNotification({
    message,
    position: "br",
    level: 'warning'
  })
}

export const info = (message) => {
  return infoNotification({
    message,
    position: "br",
    level: 'info'
  })
}

