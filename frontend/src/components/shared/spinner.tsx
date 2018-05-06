import * as React from 'react'
import * as Spinner from "react-spinkit"

class Loading extends React.Component<any, any> {

  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">

            <Spinner
              name="ball-grid-pulse"
              fadeIn="none"
              color="black"
            />

          </div>
        </div>
      </div>
    )
  }

}

export default Loading
