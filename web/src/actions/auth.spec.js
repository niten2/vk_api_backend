import React from 'react'
import { handleLogout, changePerPage } from './auth'
import authProvider from "lib/auth_provider"
import Notification from 'actions/notification'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}


// it('changePerPage', () => {
//   const perPage = 10
//   const result = changePerPage(perPage)

//   expect(result).toEqual({
//     type: "CHANGE_PER_PAGE",
//     perPage: perPage,
//   })
// })

describe('handleLogout', () => {
  // it('removeToken', () => {
  //   const token = "token"
  //   authProvider.saveToken(token)
  //   expect(authProvider.token()).toEqual(token)
  //   handleLogout()(jest.fn())
  //   expect(authProvider.token()).toBeNull()
  // })

  it('dispatch Notification', () => {
    // const mockFunc = jest.fn();
    // handleLogout()(mockFunc)
    // expect(mockFunc).toBeCalled()

    // expect(mockFunc).toBeCalledWith(Notification.success("Logout"));
    // myMock(Notification.success("Logout"))
    // console.log(res)
    // expect(authProvider.token()).toBeNull()


    // let z = requireAll(require.context("..", true, /.story\.js?$/))
    // console.log(z)



  })



})
