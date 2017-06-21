import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

class Client extends BaseModel {
  static urlRoot = `${CRM_SERVISE}/v1/clients`

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

export default Client
