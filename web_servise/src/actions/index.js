// let nextTodoId = 0
import Notification from 'actions/notification'
import authProvider from "lib/auth_provider"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

export const LOGOUT = "LOGOUT"
export const CHANGE_PER_PAGE = "CHANGE_PER_PAGE"

export const changePerPage = (perPage) => ({
  type: 'CHANGE_PER_PAGE',
  perPage: perPage,
})

export const Logout = () => ({
  type: 'LOGOUT',
})

export const handleLogin = (token) => {
  return (dispatch) => {
    console.log("GET token = ", token)
    authProvider.saveToken(token)
    dispatch(Notification.success("Get token"))
    dispatch(push('/dashboard'))
    dispatch({ type: "LOGIN" })
  }
}



// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCES,
//   LOGIN_FAIL
// } from '../constants/User'

export function handleSetting() {

  return function(dispatch) {

    dispatch({
      type: "SETTING_REQUEST"
    })

    console.log(222)


    dispatch({
      type: "SETTING_SUCCES",
      payload: {
        perPage: 20,
        time: "test",
        handle: "444",
      }
    })


    // VK.Auth.login((r) => { // eslint-disable-line no-undef
    //   if (r.session) {
    //     let username = r.session.user.first_name;

    //     dispatch({
    //       type: LOGIN_SUCCES,
    //       payload: username
    //     })

    //   } else {
    //     dispatch({
    //       type: LOGIN_FAIL,
    //       error: true,
    //       payload: new Error('Ошибка авторизации')
    //     })
    //   }
    // },4); // запрос прав на доступ к photo
  }

}




// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// export const toggleTodo = (id) => ({
//   type: 'TOGGLE_TODO',
//   id
// })
