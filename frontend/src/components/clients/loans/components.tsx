import * as React from 'react'
import Link from "src/config/link"

interface P {
  client: {
    id: string
    full_name: string
  }
}

export const ClientInfo = (props: P) => {
  const { client } = props

  return (
    <div className="container-fluid">
      <div className="card">

        <div className="card-header">
          <i className="fa fa-align-justify" />
          Client
        </div>

        <div className="card-block">
          <form className="form-2orizontal">

            <div className="form-group row">
              <div className="col-md-12">
                <div className="input-group">
                  <span className="input-group-addon">Full name</span>
                  <div className="form-control">
                    {client.full_name}
                  </div>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <Link to={`/clients/${client.id}`}>
                <button
                  className="btn btn-default"
                >
                  Cancel
                </button>
              </Link>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}
