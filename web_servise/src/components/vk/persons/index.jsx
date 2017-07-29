import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { personsQuery } from 'components/vk/graphql/querues'
import Spinner from 'components/shared/spinner'
import Page401 from 'components/shared/page401'
import Page500 from 'components/shared/page500'
import PersonView from './view'
import PersonNew from './new'

class Person extends Component {

  render() {
    console.log(this.props)

    let { loading, error, persons, refetch } = this.props.personsQuery

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
                      <th className="text-center">Id</th>
                      <th className="text-center">Аватар</th>
                      <th className="text-center">Имя</th>
                      <th className="text-center">Друзья</th>
                      <th className="text-center">Пол</th>
                      <th className="text-center">Город</th>
                      <th className="text-center">Возраст</th>
                      <th className="text-center">Статус</th>
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

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default graphql(
  personsQuery, { name: "personsQuery", }
)(Person)
