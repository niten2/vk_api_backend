import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'reducers'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { logger } from 'middleware'

export const history = createHistory()

export const configureStore = (options = {}) => {
  const { state } = options
  const middleware = routerMiddleware(history)

  return createStore(
    reducers,
    state,
    applyMiddleware(middleware, thunk, logger)
  )
}
