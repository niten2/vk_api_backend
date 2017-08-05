import { applyMiddleware, createStore } from 'redux'
import reducers from 'reducers'
import { logger } from 'middleware'

// console.log(1111)
// export const store = createStore(reducers, {
//    perPage: 9999
// })

export const store = createStore(reducers,  applyMiddleware(logger))


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

