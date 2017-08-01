import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { personsQuery } from 'components/vk/graphql/querues'
import Spinner from 'components/shared/spinner'
import Page500 from 'components/shared/page500'
import Pagination from 'components/shared/pagination'
import PersonView from './view'
import PersonNew from './new'

const PER_PAGE = 10

class Person extends Component {

  static propTypes = {
    personsQuery: PropTypes.object.isRequired,
  }

  state = {
    attributes: [
      "id",
      "uid",
      "first_name",
      "last_name",
      "followers_count",
      "sex",
      "city",
      "bdate",
      "crop_photo_url",
      "status",
    ]
  }

  render() {
    const { page } = this.props.match.params
    const { meta, loading, error, persons, refetch } = this.props.personsQuery
    const { attributes } = this.state

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="animated fadeIn">

        <PersonNew refetch={refetch}/>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify pointer"></i> Persons
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

                    { persons.map( (object, index) =>
                      <PersonView
                        key={index}
                        object={object}
                        refetch={() => refetch()}
                      />
                    )}

                  </tbody>
                </table>

                <Pagination
                  href="/vk/persons"
                  count={meta.count}
                  currentPage={parseInt(page, 10)}
                  perPage={PER_PAGE}
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default graphql(personsQuery,
  {
    name: "personsQuery",
    options: (props) => {
      const limit = PER_PAGE
      const page = parseInt(props.match.params.page, 10)
      const offset = (page - 1) * limit
      return {
        variables: {
          pagination: { limit, offset }
        }
      }
    }
  }
)(Person)
