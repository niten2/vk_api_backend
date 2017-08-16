import { CONFIG, LOGOUT, LOGIN } from 'actions/auth'
import { pipe, assocPath } from 'ramda'
import authProvider from "lib/auth_provider"

const defaultState = {
  login: authProvider.hasLogin(),
  perPage: 10,

  name: "",
  email: "",
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
    case CONFIG:
      const { name, email } = action.payload

      return pipe(
        assocPath(['name'])(name),
        assocPath(['email'])(email),
      )(state)

    case LOGIN:
      return assocPath(['login'])(true)(state)
    default:
      return state
  }
}

export default settings
