import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'reducers'

import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { logger } from 'middleware'

export const history = createHistory()

const middleware = routerMiddleware(history)

// export const store = createStore(
export const configureStore = (options = {}) => {
  let { state } = options
  return createStore(
    reducers,
    state,
    applyMiddleware(middleware, thunk, logger)
  )
}
