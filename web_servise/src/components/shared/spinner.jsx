// import Spinner from 'components/shared/spinner'
import React from 'react'
import Spinner from "react-spinkit/dist/"

const renderLoading = (props) => (
  <div className="app flex-row align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <Spinner name="ball-grid-pulse"/>
      </div>
    </div>
  </div>
)

export default renderLoading

