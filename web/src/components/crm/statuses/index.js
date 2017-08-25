import React, { Component } from 'react'
import List from "./list"
import New from "./new"

class Status extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">

          <List {...this.props}/>
          <New />

        </div>
      </div>
    )
  }
}

export default Status
