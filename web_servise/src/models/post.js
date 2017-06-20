import { API, BaseModel } from 'mobx-model'
// import authProvider from 'lib/auth'
// import { userProfile } from 'stores'
// import { UIStore, SearchStore } from 'stores'
// import Notification from 'notification'

// import isEmpty from 'lodash/isEmpty'

const ENDPOINT = "/v1/posts"

class Post extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    name: '',
    body: '',
  }

}

// Post.addClassAction('search', function(searchId, attributes = {}) {
//   let { city } = attributes
//   let response
//   response = city ? { "where": `city = '${city}'` } : null

//   API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()
//   return API.request({
//     data: response,
//     endpoint: ENDPOINT,
//     onSuccess: (response) => {
//       response.body.data.forEach(modelJson => {
//         modelJson["id"] = modelJson["objectId"]
//         this.set({ modelJson })
//       })

//       // set search results
//       SearchStore.set(searchId, {
//         results: response.body.data.map(object => object.id),
//       })
//     },
//     onError: (error) => {
//       Notification.error(error.body.message)
//     },
//   })
// })

export default Post
