import * as React from "react"

export const Info = () => {
  return (
    <div>

      <div className="row text-center">
        <div className="col-6">
          <p className="text-muted">
            default login admin
            <br />
            login: admin
            <br />
            password: 12345
          </p>
        </div>

        <div className="col-6">
          <p className="text-muted">
            default login manager
            <br />
            login: manager
            <br />
            password: 12345
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-12">
          <p className="text-muted">
            <a href="https://github.com/niten2/todo_credit_site_backend">
              source code backend
            </a>

            <br />

            <a href="https://github.com/niten2/todo_credit_site_frontend">
              source code frontend
            </a>
          </p>
        </div>
      </div>

    </div>
  )
}

export const ErrorMessage = (props: { error: string | null }): any => {
  if (props.error) {
    return(
      <div>
        <div className="text-danger text-center">
          {props.error}
        </div>
        <br />
      </div>
    )
  } else {
    return <div />
  }
}
