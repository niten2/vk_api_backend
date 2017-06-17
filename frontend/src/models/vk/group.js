import { API, BaseModel } from 'mobx-model'
import authProvider from 'lib/auth'
import { userProfile } from 'stores'
import { UIStore, SearchStore } from 'stores'
import Notification from 'notification'

const ENDPOINT = "/v1/groups"

class Group extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    name: '',
    screen_name: '',
    gid: '',
    members_count: '',
    note: '',
    photo_50: '',
    status: '',
  }

}

export default Group
