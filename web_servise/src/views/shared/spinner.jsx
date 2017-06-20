// import Spinner from 'spinner'

// render() {
//   return this.state.loading ? this.renderLoading() : this.renderView()
// }

import React, { Component } from 'react'
import Spinner from "react-spinkit/dist/"

class ReactSpinner extends Component {
  render() {
    return (
      <div className="center spinner-shared">
        <Spinner spinnerName='double-bounce' />
      </div>
    )
  }
}

const renderLoading = (props) => (
  <div className="center spinner"> <Spinner /> </div>
)

export default renderLoading

