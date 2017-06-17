import { API } from 'mobx-model'
// import authProvider from 'lib/auth'
// import Notification from 'notification'

API.config({
  urlRoot: API_ROOT,
  requestHeaders: {
    // "Content-Type": "application/json",
    // "application-type": "REST",
    // "application-id": APPLICATION_ID,
    // "secret-key": SECRET_KEY_ID,
  },

  onRequestError(response) {
    Notification.error(`${response.statusCode}, ${response.body.error}`)
  },

  // onRequestCompleted(response) {
  //   console.log('API request completed', response.body);
  // },

})
