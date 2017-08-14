import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import { success } from 'actions/notification'

// import Notifications, { success, error, warning, info, removeAll } from 'react-notification-system-redux';

// const notificationOpts = {
//   message: "dfsdfsdfdsf",
//   position: "br",
//   // position: "tc",
//   level: 'info'


//   // uid: 'once-please', // you can specify your own uid if required
//   // title: 'Hey, it\'s good to see you!',
//   // message: 'Now you can see how easy it is to use notifications in React!',
//   // position: 'tr',
//   // autoDismiss: 0,
//   // action: {
//   //   label: 'Click me!!',
//   //   callback: () => alert('clicked!')
//   // }
// };

class Container extends React.Component {

  // constructor() {
  //   super();

  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }

  // dispatchNotification(fn, timeout) {
  //   setTimeout(() => {
  //     this.context.store.dispatch(fn(notificationOpts));
  //   }, timeout);
  // }

  handleClick = () => {
    console.log(this.props)
    // this.dispatchNotification(success);
    this.props.dispatch(success("message"))

    // this.dispatchNotification(error, 500);
    // this.dispatchNotification(warning, 750);
    // this.dispatchNotification(info, 1000);
  }

  // handleRemoveAll() {
  //   this.context.store.dispatch(removeAll());
  // }

	render() {
    // const {notifications} = this.props;

		return (
	    <div>
        settings
        <button onClick={this.handleClick}>Spawn some notifications!!!</button>
      </div>
		);
	}
}

// Container.contextTypes = {
//   store: PropTypes.object
// };

// Container.propTypes = {
//   notifications: PropTypes.array
// };

export default connect()(Container)
