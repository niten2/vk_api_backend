import VK from "vk-io"
import settings from "config/settings"

// const vk = new VK()

// vk.setToken(settings.vkToken)

export const buildVk = (vkToken) => {
  const vk = new VK()
  vk.setToken(vkToken)

  return vk
}


// export default vk
