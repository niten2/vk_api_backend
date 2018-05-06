import VK from "vk-io"
import settings from "config/settings"

const vk = new VK()

vk.setToken(settings.vkToken)

export default vk
