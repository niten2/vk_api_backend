import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "/v1/users"

class User extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    // id: null,
    // email: '',
    // password: '',
    // token: '',
    uid: "",
    first_name: "",
    last_name: "",
    followers_count: "",
    sex: "",
    city: "",
    bdate: "",
    crop_photo_url: "",
    status: "",
  }

}

User.addClassAction('setInactive', function(attributes = {}) {
  let { id } = attributes
  // let data = await Serializer(name, attributes)
  // API.requestHeaders[HEADER_SESSION_TOKEN] = authProvider.fetchToken()

  return API.request({
    method: 'put',
    endpoint: `${this.urlRoot}/${id}`,
    data: { status: "inactive"},
    onSuccess: (response) => {
      if (response.ok) {
        Notification.success("update success")
        User.get(id).onDestroy()
      }
    },
  })

})


export default User
