import { API } from 'mobx-model'

API.config({
  urlRoot: "",
  requestHeaders: {
    "Content-Type": "application/json",
  },

  onRequestError(response) {
    console.log(1111)
    Notification.error(`${response.statusCode}, ${response.body.error}`)
  },

  // onRequestCompleted(response) {
  //   console.log('API request completed', response.body);
  // },

})
