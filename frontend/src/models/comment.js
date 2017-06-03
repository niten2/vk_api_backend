import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "/api/v1/comments"

class Comment extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    body: '',
    post: {
      name: "",
      body: "",
    },
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

export default Comment
