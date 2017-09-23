import { match, spy } from "sinon"
import { LOGOUT, LOGIN, CONFIG, loadConfig, handleLogin, handleLogout, changePerPage } from 'actions/auth'
import Notification from 'actions/notification'
import { push } from 'react-router-redux'

describe('changePerPage', () => {
  it('should return correct result', () => {
    const perPage = 10
    const result = changePerPage(perPage)

    expect(result).toEqual({
      type: "CHANGE_PER_PAGE",
      perPage: perPage,
    })
  })
})

describe('handleLogout', () => {
  it('should return correct result', async () => {
		localStorage.setToken("12345")

    let dispatch = spy()
    let result = await handleLogout()(dispatch)

    expect(localStorage.getToken()).toBe(undefined)
    expect(dispatch.calledWith(match.has("message", "Logout"))).toBe(true)
    expect(dispatch.calledWith(push('/dashboard'))).toBe(true)
    expect(dispatch.calledWith({ type: LOGOUT })).toBe(true)
  })
})

describe('handleLogin', () => {
  it('should return correct result', async () => {
    let token = "12345"
    let dispatch = spy()
    let result = await handleLogin(token)(dispatch)

    expect(localStorage.getToken()).toBe(token)
    expect(dispatch.calledWith(match.has("message", "Get token"))).toBe(true)
    expect(dispatch.calledWith(push('/dashboard'))).toBe(true)
    expect(dispatch.calledWith({ type: LOGIN })).toBe(true)
  })
})

describe('loadConfig', () => {

  const result = {
    data: {
      user: {
        name: 'world',
        email: 'test@test.com'
      }
    }
  }

  let dispatch = spy()

  afterEach(() => {
    dispatch.reset()
    localStorage.clear()
  })

  it('with token', async () => {
		localStorage.setToken("12345")
    mockResponse(result)

    let res = await loadConfig()(dispatch)
    let args = {
      payload: {
        name: result.data.user.name,
        email: result.data.user.email,
      },
      type: CONFIG,
    }

    expect(dispatch.calledWith(args)).toBe(true)
  })

  it('without token', async () => {
    let res = await loadConfig()(dispatch)
    expect(dispatch.notCalled).toBe(true)
  })

})

