import { combineReducers } from 'redux'
import { reducer as notifications } from 'react-notification-system-redux'
import { routerReducer as router } from 'react-router-redux'
import settings from './settings'

const reducers = combineReducers({
  settings,
  notifications,
  router,
})

export default reducers
