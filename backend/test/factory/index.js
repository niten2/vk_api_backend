import { User } from "app/models"
import { factory } from "factory-girl"
import faker from "faker"

factory.define('user', User, {
  full_name: faker.name.findName,
  email: faker.internet.email,
  password: faker.internet.password,
})

export default factory
