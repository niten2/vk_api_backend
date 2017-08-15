import Notification from 'actions/notification'
import authProvider from "lib/auth_provider"
import { push } from 'react-router-redux'

export const LOGOUT = "LOGOUT"
export const LOGIN = "LOGIN"

export const changePerPage = (perPage) => ({
  type: 'CHANGE_PER_PAGE',
  perPage: perPage,
})

export const handleLogout = () => {
  return (dispatch) => {
    authProvider.removeToken()
    dispatch(Notification.success("Logout"))
    dispatch(push('/dashboard'))
    dispatch({ type: LOGOUT })
  }
}

export const handleLogin = (token) => {
  return (dispatch) => {
    console.log("GET token = ", token)
    authProvider.saveToken(token)
    dispatch(Notification.success("Get token"))
    dispatch(push('/dashboard'))
    dispatch({ type: LOGIN })
  }
}

// export function handleSetting() {
//   return (dispatch) => {
//     dispatch({
//       type: "SETTING_REQUEST"
//     })

//     dispatch({
//       type: "SETTING_SUCCES",
//       payload: {
//         perPage: 20,
//         time: "test",
//         handle: "444",
//       }
//     })


//     // VK.Auth.login((r) => { // eslint-disable-line no-undef
//     //   if (r.session) {
//     //     let username = r.session.user.first_name;

//     //     dispatch({
//     //       type: LOGIN_SUCCES,
//     //       payload: username
//     //     })

//     //   } else {
//     //     dispatch({
//     //       type: LOGIN_FAIL,
//     //       error: true,
//     //       payload: new Error('Ошибка авторизации')
//     //     })
//     //   }
//     // },4); // запрос прав на доступ к photo
//   }
// }
