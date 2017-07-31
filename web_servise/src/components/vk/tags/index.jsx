import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { tagsQuery } from 'components/vk/graphql/querues'
import Spinner from 'components/shared/spinner'
import Page500 from 'components/shared/page500'
import New from './new'
import View from './view'
import Filter from './filter'

class Tag extends Component {

  static propTypes = {
    tagsQuery: PropTypes.object.isRequired,
  }

  state = {
    attributes: [
      "id",
      "name",
      "status",
    ]
  }

  render() {
    const { loading, error, tags, refetch } = this.props.tagsQuery
    const { attributes } = this.state

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="">
        <div className="row">

          <div className="col-lg-6">
            <div className="card">

              <div className="card-header">
                <i className="fa fa-align-justify pointer"></i> Tags
              </div>
              <div className="card-block">
                <table className="table text-center">
                  <thead>
                    <tr>
                      { attributes.map((attribute, index) =>
                        <th key={index} className="text-center">{ attribute }</th>
                      )}

                      <th className="text-center">Edit</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>

                    { tags.map( (object, index) =>
                      <View
                        key={index}
                        object={object}
                        refetch={() => refetch()}
                      />
                    )}

                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="col-lg-12">
              <New refetch={refetch}/>
            </div>

            <div className="col-lg-12">
              <Filter refetch={refetch}/>
            </div>
          </div>

        </div>
      </div>
    )
  }

}

export default graphql(
  tagsQuery, { name: "tagsQuery" }
)(Tag)
