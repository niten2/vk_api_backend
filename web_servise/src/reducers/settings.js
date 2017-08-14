import { LOGOUT, LOGIN } from 'actions'
import { assocPath } from 'ramda'
import authProvider from "lib/auth_provider"

const defaultState = {
  login: authProvider.hasLogin(),
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
    case LOGOUT:
      return assocPath(['login'])(false)(state)
    case LOGIN:
      return assocPath(['login'])(true)(state)
    default:
      return state
  }
}

export default settings
