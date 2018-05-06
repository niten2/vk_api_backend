import faker from "faker"
import { factory } from "factory-girl"
import { User, VkPerson } from "app/models"

factory.define('user', User, {
  name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
  vk_token: faker.internet.password,
})

factory.define('vkPerson', VkPerson, {
  uid: faker.name.findName,
  first_name: faker.name.findName,
  addFriendAt: faker.date.past,
})

export default factory
