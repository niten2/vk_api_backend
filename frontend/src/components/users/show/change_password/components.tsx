import * as React from "react"

export const ErrorMessage = (props: {message: string}): any => {
  const { message } = props

  if (message !== "") {
    return(
      <div>
        <div className="text-danger text-center">
          {message}
        </div>
        <br />
      </div>
    )
  } else {
    return <div />
  }
}
