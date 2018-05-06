import * as React from 'react'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import UserView from './view'
import { withData } from './queries'

interface P {
  vkPersonsQuery: {
    vkPersons: [object]
    loading: any
    error: any
  }
}

class ListUser extends React.Component<P, {}> {

  render() {
    let { vkPersons, loading, error } = this.props.vkPersonsQuery

    // console.log(this.props.vkPersonsQuery)

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="container-fluid">
        <div className="animated fadeIn">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  <i className="fa fa-align-justify" /> Users
                </div>

                <div className="card-block">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th className="text-center">uid</th>
                        <th className="text-center">isFriend</th>
                      </tr>
                    </thead>
                    <tbody>

                      { vkPersons.map((object, index) =>
                        <UserView
                          key={index}
                          object={object}
                        />
                      )}

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default withData(ListUser)

