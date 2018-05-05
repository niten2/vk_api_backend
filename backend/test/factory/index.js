import faker from "faker"
import { factory } from "factory-girl"
import { User } from "app/models"

factory.define('user', User, {
  name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
})

export default factory
