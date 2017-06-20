import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "/v1/filters"
const HEADER_SESSION_TOKEN='Authorization'

class Filter extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    full_name: '',
    links: '',
    city: '',
    age: '',
  }

}

Filter.addClassAction('filterUser', function(attributes = {}) {
  API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()

  return API.request({
    data: attributes,
    endpoint: ENDPOINT,

    onSuccess: (response) => {
      let models = response.body.users
      models.forEach( modelJson => { this.set({ modelJson }) })
    }
  })
})


export default Filter
