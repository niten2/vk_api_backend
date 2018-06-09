import sinon from 'sinon'
import * as vk from 'config/vk'
import * as utils from "app/services/utils"

const mockVkApi = {
  api: {
    users: {
      get: () => {
        return [{
          id: "id",
          first_name: "first_name",
          last_name: "last_name",
        }]
      }
    }
  }
}

export const mockVk = () => sinon.stub(vk, 'default').returns(mockVkApi)
export const mockDelay = () => sinon.stub(utils, 'delay').returns(() => {})
