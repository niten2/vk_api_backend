import { combineReducers } from 'redux'
import todos from './setting'

const todoApp = combineReducers({
  todos,
})

export default todoApp
