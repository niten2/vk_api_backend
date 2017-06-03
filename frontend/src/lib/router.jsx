import React from 'react'
import ReactDOM from 'react-dom'

// import Pace from "../_vendor/pace/pace"

// function onUpdate () {
//   Pace.restart()
// }

export default (routes) => {
  ReactDOM.render(
    // routes(onUpdate),
    routes(),
    document.getElementById('app-container')
  )
}

