import authProvider from 'lib/auth_provider'
import { assocPath } from 'ramda'

const defaultState = {
  login: false,
  perPage: 2,
}


const settings = (state = defaultState, action) => {

  switch (action.type) {
    case 'CHANGE_PER_PAGE':
      return [
        ...state,
        {
          perPage: action.perPage,
        }
      ]
    case 'LOGOUT':
      return assocPath(['login'])(false)(state)
    case 'LOGIN':
      return assocPath(['login'])(true)(state)
    default:
      return state
  }
}

export default settings

// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })
