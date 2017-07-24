import React, { Component } from 'react'
import List from "./list"
import New from "./new"

class Status extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">

          <List />
          <New />

        </div>
      </div>
    )
  }
}

export default Status
