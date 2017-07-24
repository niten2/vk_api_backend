import React from 'react'
import ReactDOM from 'react-dom'
import App from 'lib/router'
import AuthProvider from 'lib/auth_provider'

// import "font-awesome/css/font-awesome.css"
// import 'bootstrap/dist/css/bootstrap.css'

AuthProvider.checkAuth()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
