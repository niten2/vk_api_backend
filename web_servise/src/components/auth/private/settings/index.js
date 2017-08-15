import React from 'react'
import PropTypes from 'prop-types'
import { settingQuery } from 'components/auth/graphql/private/querues'
import { compose, graphql } from 'react-apollo'
import Spinner from 'components/shared/spinner'
import Page401 from 'components/shared/page401'
import Page500 from 'components/shared/page500'
import SettingView from './view'

class Setting extends React.Component {

  static propTypes = {
    settingQuery: PropTypes.object.isRequired,
  }

  state = {
    attributes: [
      "name",
      "value",
    ]
  }

  render () {
    const { attributes } = this.state
    const { refetch, loading, error, settings } = this.props.settingQuery

    if (loading ) {
      return <Spinner />
    }

    if (error && error.message.includes("401") ) {
      return <Page401 />
    }

    if (error ) {
      return <Page500 />
    }

    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong>Settings</strong>
              </div>

                <table className="table text-center">
                  <thead>
                    <tr>
                      { attributes.map((attribute, index) =>
                        <th key={index} className="text-center">{ attribute }</th>
                      )}
                      <th className="text-center">Delete</th>
                      <th className="text-center">Update</th>
                    </tr>
                  </thead>
                  <tbody>

                    { settings.map( (object, index) =>
                      <SettingView
                        key={index}
                        object={object}
                        refetch={refetch}
                      />
                    )}

                  </tbody>
                </table>

            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default compose(
  graphql(settingQuery, { name: "settingQuery" }),
)(Setting)
