import { mergeDeepWith, merge, concat, prop, last } from "ramda"
import * as React from 'react'

import Spinner from 'src/components/shared/spinner'
import Page500 from 'src/components/shared/page500'
import UserView from './view'
import { withData } from './queries'

interface P {
  vkPersonsQuery: {
    vkPersons: {
      vkPersons: [object]
    }
    loading: any
    error: any
  }
}

class ListUser extends React.Component<any, {}> {

  // componentWillReceiveProps(props: any) {
  //   console.log(111111111111, props)
  // }

  onLoadMore = async () => {
    let { vkPersons, fetchMore } = this.props.vkPersonsQuery
    let cursor = prop("id", last(vkPersons.vkPersons))

    const options = {
      variables: {
        input: {
          cursor,
          // limit: 5+5,
        }
      },

      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return prev }

        // let res = concat(fetchMoreResult.vkPersons.vkPersons, prev.vkPersons.vkPersons)
        fetchMoreResult.vkPersons.vkPersons = prev.vkPersons.vkPersons.concat(fetchMoreResult.vkPersons.vkPersons)
        // console.log(111, z)



        return fetchMoreResult



      },

    }

    await fetchMore(options)
  }

  render() {
    // console.log("RENDER", this.props.vkPersonsQuery)

    let { vkPersons, loading, error } = this.props.vkPersonsQuery

    // console.log(this.props.vkPersonsQuery)

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 error={error}/>
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
                        <th className="text-center">id</th>
                        <th className="text-center">uid</th>
                        <th className="text-center">isFriend</th>
                      </tr>
                    </thead>
                    <tbody>

                      { vkPersons.vkPersons.map((object, index) =>
                        <UserView
                          key={index}
                          object={object}
                        />
                      )}

                    </tbody>

                  </table>

                  <button onClick={this.onLoadMore}>More</button>

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
