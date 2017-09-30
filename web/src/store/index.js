import reducers from 'reducers'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { logger } from 'middleware'

export const history = createHistory()

export const configureStore = (state) => {
  const middleware = routerMiddleware(history)

  return createStore(
    reducers,
    state,
    applyMiddleware(middleware, thunk, logger)
  )
}
