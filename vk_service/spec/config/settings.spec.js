import { expect } from 'chai'
import settings from "config/settings"

describe('settings', () => {
  it("correct vars", async () => {
    expect(settings.name).to.have.eq("vk_service")
    expect(settings.storage).to.have.eq("./db/database.test.sqlite")
    expect(settings.env).to.have.eq(process.env.NODE_ENV)
    expect(settings.port).to.have.eq(process.env.PORT)
    expect(settings.vkAppId).to.have.eq(process.env.VK_APP_ID)
    expect(settings.vkAppSecret).to.have.eq(process.env.VK_APP_SECRET)
    expect(settings.vkToken).to.have.eq(process.env.VK_TOKEN)
  })
})
