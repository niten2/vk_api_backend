import React, { Component } from 'react'
import { graphql } from 'react-apollo'
// import { Row, Container, Col } from 'reactstrap'
// import { Link } from 'lib/nav_link'
import { personsQuery } from 'components/vk/graphql/querues'
import Spinner from 'components/shared/spinner'
import Page401 from 'components/shared/page401'
import Page500 from 'components/shared/page500'
import PersonView from './view'

// import Notification from 'lib/notification'
// import Spinner from 'components/shared/spinner'
// import { observer } from 'mobx-react'
// import { UIStore } from 'stores'
// import { User, Tag } from "models"

// import { size, compact, sortBy } from "lodash"
// import Select from 'react-select'

// import { Tabs, Tab, Button, Row, Col } from 'reactstrap'
// import { Row, Col } from 'reactstrap'
// import { Row, Container, Col, Button } from 'reactstrap'

import PersonNew from './new'
// import Sidebar from 'components/vk/sidebar'

// @observer

// const Buttons = (props) => {
//   return(
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="card">
//           <div className="card-header">
//             <strong>Options</strong>
//           </div>
//           <div className="card-block">

//             <Link href={`/vk/persons/new`}>
//               <button type="button" className="btn btn-primary">
//                 New Person
//               </button>
//             </Link>

//             <button
//               type="button"
//               className="btn btn-secondary"
//               onClick={() => { props.refetch() }}
//             >Reload</button>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


class Person extends Component {

  render() {
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
                <i className="fa fa-align-justify"></i> persons
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

// <SelectView count={count} />
// { UIStore.loading ? Spinner() : this.renderObjects() }

export default graphql(
  personsQuery, { name: "personsQuery", }
)(Person)

