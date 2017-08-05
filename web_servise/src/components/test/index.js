import React, { Component } from 'react'
// import { Content } from 'shared/components'

import { combineReducers, createStore } from 'redux'
// import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

let store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

// Единственный способ изменить внутреннее состояние - это вызвать действие
// Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1




function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)





export default class Test extends Component {
  render() {
    return (
      <div className="center">
        sdfsdfsdfsdf
      </div>
    )
  }
}


