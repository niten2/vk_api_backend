import { logger } from 'middleware'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'reducers' // Or wherever you keep your reducers
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'



export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  reducers,
  // combineReducers({
  //   ...reducers,
  //   router: routerReducer
  // }),
  applyMiddleware(middleware, thunk, logger)
)


// export const configureStore = (options = {}) => {
//   const { state, history } = options
//   const middleware = routerMiddleware(history)

//   return createStore(
//     reducers,
//     state,
//     applyMiddleware(middleware, thunk, logger)
//   )
// }





// import { applyMiddleware, createStore } from 'redux'
//   const logger = createLogger()

//   return store
// }


// import rootReducer from '../reducers'
// import createLogger from 'redux-logger'

// /*
//  * типы действий
//  */

// export const ADD_TODO = 'ADD_TODO'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// /*
//  * другие константы
//  */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

// /*
//  * генераторы действий
//  */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function toggleTodo(index) {
//   return { type: TOGGLE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

// console.log(thunk)
// console.log(1111)
// export const store = createStore(reducers, {
//    perPage: 9999
// })


// const logger = createLogger()

// export const store = createStore(rootReducer,  applyMiddleware(logger, thunk))



// export const configureStore = () => {
