import React, { Component } from 'react'
// import { observer } from 'mobx-react'
// import { UIStore } from 'stores'

import { Row, Container, Col, Button } from 'reactstrap'
import { NavLink } from 'lib/nav_link'
// import Notification from 'lib/notification'
import Spinner from 'components/shared/spinner'

export default class UpdateClient extends Component {

  // async componentWillMount() {
  //   let id = this.props.params.id
  //   await Client.loadObject(id)

  //   let client = await Client.get(id)
  //   this.setState({client: client, loading: false })
  // }

  state = {
    client: {
      name: "",
    },
    loading: false,
  }

  // handleSetState = (e) => {
  //   const { name, value } = e.target
  //   let { client } = this.state
  //   client[name] = value
  //   this.setState({ client })
  // }

  // handleUpdate = async () => {
  //   const { client } = this.state
  //   let response = await Client.updateObject(client)

  //   if (response.ok) {
  //     Notification.success("ok")
  //   } else {
  //     Notification.errors(response.body)
  //   }
  // }

  // handleOnKeyPress = (target) => {
  //   target.charCode == 13 ?  this.handleCreate() : null
  // }

  renderView() {
    // let { client } = this.state

    return (
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            update
          </Col>



          <Col xs={{ size: 4, offset: 6 }}>
            <br />
            <Button onClick={this.handleCreate}>
              Save
            </Button>

            <NavLink to="/crm/clients">
              <Button>
                Return
              </Button>
            </NavLink>
          </Col>

        </Row>
      </Container>
    )
  }

  render() {
    return this.state.loading ? Spinner() : this.renderView()
  }

}


        //   Create new Group
        //   <Clearfix />
        //   <br />

        //   <Col xs={6}>
        //     URL
        //   </Col>
        //   <Col xs={6}>
        //     <textarea
        //       name="name"
        //       rows="10"
        //       cols="10"
        //       className="form-control"
        //       onChange={ this.handleSetState }
        //       onKeyPress={ this.handleOnKeyPress }
        //       value={ client.name }
        //     />
        //   </Col>

        //   <Clearfix />
        //   <br />


        // </Col>

        // <Clearfix />
        // <br />

        // <div className="text-center">
        //   <Button onClick={this.handleCreate}>
        //     Save
        //   </Button>
        //   &nbsp;
        //   <NavLink to="/crm/clients">
        //     <Button>
        //       Return
        //     </Button>
        //   </NavLink>
        // </div>

