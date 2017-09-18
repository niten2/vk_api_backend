import chai, { expect } from 'chai'
import settings from "config/settings"

describe('settings', () => {
  it("correct vars", async () => {
    expect(settings.name).to.have.eq("api_gateway")
    expect(settings.env).to.have.eq(process.env.NODE_ENV)
    expect(settings.port).to.have.eq(process.env.PORT)
    expect(settings.storage).to.have.eq("./db/database.test.sqlite")
    expect(settings.jwt_secret_key).to.have.eq(process.env.JWT_SECRET_KEY)
    expect(settings.crmUri).to.have.eq(process.env.CRM_URI)
    expect(settings.vkUri).to.have.eq(process.env.VK_URI)
    expect(settings.instaUri).to.have.eq(process.env.INSTA_URI)
  })
})
