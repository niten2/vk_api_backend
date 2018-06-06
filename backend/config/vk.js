import VK from "vk-io"
import settings from "config/settings"

export default (vkToken) => {
  const vk = new VK()
  vk.setToken(vkToken)

  return vk
}
