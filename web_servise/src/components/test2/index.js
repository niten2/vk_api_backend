import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import { push } from 'react-router-redux'
console.log(push)
// import { success } from 'actions/notification'


// import Notification from 'lib/notification'

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
    this.props.dispatch(push("/test"))
    // console.log(this.props)
    // this.dispatchNotification(success);
    // this.props.dispatch(success("message"))

    // this.dispatchNotification(error, 500);
    // this.dispatchNotification(warning, 750);
    // this.dispatchNotification(info, 1000);
// Notification.success("update profile")

  }

  // handleRemoveAll() {
  //   this.context.store.dispatch(removeAll());
  // }

	render() {
    // console.log(this.props)
    // const {notifications} = this.props;

		return (
	    <div>
        test2
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

// const mapStateToProps = (state, ownProps) => {
//   // console.log(state.settings.login)
//   return {
//     login: state.settings.login,
//   }
// }

export default connect()(Container)
