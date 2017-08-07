import { combineReducers } from 'redux'
import { reducer as notifications } from 'react-notification-system-redux'
import settings from './settings'

const reducers  = combineReducers({
  settings,
  notifications,
})

export default reducers
