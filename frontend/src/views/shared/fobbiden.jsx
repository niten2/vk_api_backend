import React, { Component } from 'react'
import { Content } from 'shared/components'

export default class NotFound extends Component {
  render() {
    return (
      <div className="center">
        <span className="rubix-icon icon-mfizz-ghost icon-page-not-found" />
        <h1>Resource Fobbiden</h1>
      </div>
    )
  }
}
