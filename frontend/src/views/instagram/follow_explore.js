import React, { PropTypes, Component } from 'react'
import { Button } from 'styles'

export default class FollowExplore extends Component {


  handeClick() {
    console.log(1111)


  }

  render() {
    return (
      <div className="text-center">

        <h1> FollowExplore </h1>
        <Button onClick={ this.handeClick }>run FollowExplore</Button>

      </div>
    )
  }

}

