import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "/v1/clients"

class Client extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    number: "",
    name: "",
    phone: "",
    date_birth: "",
    note: "",
  }

  // static relations = [
  //   {
  //     type: 'hasOne',
  //     relatedModel: 'Post',
  //     foreignKey: "",
  //     reverseRelation: true,
  //   }
  // ]

}

Client.addClassAction('search', (searchId, attributes = {}) => {
  // let { city } = attributes
  // let response
  // response = city ? { "where": `city = '${city}'` } : null

  return API.request({
    data: response,
    endpoint: ENDPOINT,
    onSuccess: (response) => {

      response.body.data.forEach(modelJson => {
        this.set({ modelJson })
      })

      // set search results
      SearchStore.set(searchId, {
        results: response.body.data.map(object => object.id),
      })
    },
    onError: (error) => {
      Notification.error(error.body.message)
    },
  })
})

export default Client
