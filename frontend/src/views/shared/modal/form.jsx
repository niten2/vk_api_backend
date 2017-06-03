import React, { PropTypes, Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'
import sendEmail from 'lib/email'

import { Modal, Button, Clearfix, Grid, Row, Col } from 'react-bootstrap'

@observer
export default class okModal extends Component {

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      UIStore.hideModalForm()
    }
  }

  onClose = () => {
    UIStore.hideModalForm()
  }

  state = {
    email_send: false,
    error: false,
    contact: {
      name: "",
      phone: "",
    },
  }

  handeInput = (e) => {
    const { name, value } = e.target
    let { contact } = this.state

    contact[name] = value
    this.setState({ contact })
  }

  handeSendEmail = () => {
    let { contact } = this.state
    let { name, phone } = contact

    if (name == "" || phone == "") {
      this.setState({ error: true })
    }

    if (name != "" && phone != "") {
      sendEmail({ name: name, phone: phone})
      this.setState({ email_send: true, error: false })
    }
  }

  onClose() {
    UIStore.hideModalForm()
  }

  renderError() {
    return (
      <div className="error">
        Необходимо заполнить поля Имя и Телефон
      </div>
    )
  }

  renderEmail() {
    let { name, phone, error } = this.state
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>
            Оставить заявку на бесплатное посещение
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Col className="modal-form">
            <input
              name="name"
              onChange={this.handeInput}
              placeholder="Ваше Имя*"
              className="form-control"
              value={name}
            />

            <input
              name="phone"
              onChange={this.handeInput}
              placeholder="Ваш Телефон*"
              className="form-control"
              value={phone}
            />

            <Clearfix />
            { error ? this.renderError() : null }

          </Col>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn cancel"
            onClick={ this.onClose }
          > Отменить </button>

          <button
            className="btn ok"
            onClick={this.handeSendEmail}
          >
            Записаться
          </button>
        </Modal.Footer>
      </div>
    )
  }

  renderOk() {
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title> Спасибо за вашу заявку </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Мы с вами обязательно свяжемся
        </Modal.Body>

        <Modal.Footer>
          <button
            onClick={ this.onClose }
            className="btn btn-outlined btn-danger"
          > Ok </button>
        </Modal.Footer>
      </div>
    )
  }

  render () {
    let { email_send } = this.state
    return (
      <Modal
        show={ UIStore.modalForm }
        onHide={ this.onClose }
        onKeyPress={ this.handleOnKeyPress }
      >
        { email_send ? this.renderOk() : this.renderEmail() }
      </Modal>
    )
  }

}
