import Notification from 'actions/notification'
import authProvider from "lib/auth_provider"
import { push } from 'react-router-redux'
import { userQuery } from 'components/auth/graphql/querues'
import { apolloFetch } from "lib/apollo_fetch"

export const CONST = {
  LOGOUT: "LOGOUT",
  LOGIN: "LOGIN",
  CHANGE_PER_PAGE: "CHANGE_PER_PAGE",
  UPDATE_PROFILE: "UPDATE_PROFILE",
}

export const changePerPage = (perPage) => ({
  type: CONST.CHANGE_PER_PAGE,
  perPage: perPage,
})

export const updateProfile = (options) => ({
  type: CONST.UPDATE_PROFILE,
  payload: options,
})

export const handleLogout = () => {
  return (dispatch) => {
    authProvider.removeToken()
    dispatch(Notification.success("Logout"))
    dispatch(push('/dashboard'))
    dispatch({ type: CONST.LOGOUT })
  }
}

export const handleLogin = (token) => {
  return async (dispatch) => {
    authProvider.saveToken(token)
    dispatch(Notification.success("Get token"))
    dispatch(push('/dashboard'))
    dispatch({ type: CONST.LOGIN })
    await loadConfig()(dispatch)
  }
}

export const loadConfig = () => {
  return async(dispatch) => {
    if (authProvider.hasLogin()) {
      const result = await apolloFetch({ query: userQuery })

      if (result.data.user) {
        const args = {
          payload: {
            name: result.data.user.name,
            email: result.data.user.email,
          },
          type: CONST.UPDATE_PROFILE,
        }
        dispatch(args)
      } else {
        dispatch(Notification.error("Token Invalid"))
        authProvider.removeToken()
        dispatch(push('/login'))
      }
    }
  }
}
