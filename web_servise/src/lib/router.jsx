import React from 'react'
import ReactDOM from 'react-dom'

export default (routes) => {
  ReactDOM.render(
    routes(),
    document.getElementById('app-container')
  )
}

