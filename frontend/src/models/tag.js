import { API, BaseModel } from 'mobx-model'

const ENDPOINT = "/v1/tags"

class Tag extends BaseModel {
  static urlRoot = ENDPOINT

  static attributes = {
    id: null,
    name: '',
    kind: "",
  }

}

export default Tag
