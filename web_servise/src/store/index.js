import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import reducers from 'reducers'

import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { logger } from 'middleware'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  reducers,
  applyMiddleware(middleware, thunk, logger)
)
