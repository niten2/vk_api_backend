import { User } from 'app/models'

describe('VkPerson', () => {
  it("User", async () => {
    const user = await factory.create("user")
    const vkPerson = await factory.create("vkPerson", { user_id : user.id })
    const getVkPerson = await user.getVkPersons()

    expect(getVkPerson[0].id).toEqual(vkPerson.id)
  })
})
