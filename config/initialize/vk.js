// nodemon --exec node --harmony --require ./tools/babelhook api/lib/vk/vk.js

import VK from 'vk-io'
import Settings from 'config/settings'

let vk = new VK({
  app: Settings.vkAppId,
  key: Settings.vkAppSecret,
  // token: Settings.vkToken,
})

// const auth = vk.auth.standalone();

export default vk

