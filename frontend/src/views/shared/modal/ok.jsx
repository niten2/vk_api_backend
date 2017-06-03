import React, { PropTypes, Component } from 'react'
import { Modal } from 'react-bootstrap'
import { observer } from 'mobx-react'
import { UIStore } from 'stores'

@observer
export default class okModal extends Component {

  handleOnKeyPress = (target) => {
    if (target.charCode == 13) {
      UIStore.hideModalOk()
    }
  }

  onClose = () => {
    UIStore.hideModalOk()
  }

  render () {
    return (
      <Modal
        show={ UIStore.modalOk }
        onHide={ this.onClose }
        onKeyPress={ this.handleOnKeyPress }
      >
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

      </Modal>
    )
  }

}
