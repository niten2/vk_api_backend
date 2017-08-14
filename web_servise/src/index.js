// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
import App from './app'
// import { Router, Route, browserHistory } from 'react-router'
// import { configureStore } from 'store'
// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()
// const store = configureStore({ history: history, state: {}})


// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// )



import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

// import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducers from 'reducers' // Or wherever you keep your reducers

import { history, store } from 'store'
// import Test from 'components/test'
// import Test2 from 'components/test2'

// const history = createHistory()

// const middleware = routerMiddleware(history)

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// )


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
