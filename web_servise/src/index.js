import React from 'react'
import ReactDOM from 'react-dom'
import App from './router'
// import AuthProvider from 'lib/auth_provider'

import { Provider } from 'react-redux'
// import { configureStore } from 'store'
import { configureStore } from 'store'

// console.log(store.getState())
// const store = configureStore()


// import "font-awesome/css/font-awesome.css"
// import 'bootstrap/dist/css/bootstrap.css'

// console.log(AuthProvider.checkAuth())


const state = () => {

  // if (AuthProvider.checkAuth()) {
  //   return {}
  // }

  return {
    settings: {
      perPage: 4444,
      login: true,
    }
  }
}

ReactDOM.render(
  // <App />,

  <Provider store={configureStore(state())}>
    <div className='app'>
      <App />
    </div>
  </Provider>,

  document.getElementById('root')
)
