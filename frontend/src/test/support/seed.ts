import * as faker from "faker"

export let fakeUser = {
  full_name: faker.name.findName(),
  email: faker.internet.email(),
  login: faker.name.findName(),
  password: faker.internet.password(),
  phone: faker.phone.phoneNumber(),
  role: "manager",
}

export let fakeClient = {
  full_name: faker.name.findName(),
  passport: faker.phone.phoneNumber(),
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  mark_as_deleted: false,
}

export let fakeTerritory = {
  name: faker.address.country(),
  rate: faker.random.number(),
}

export let fakeLoan = {
  date_start: faker.date.past(),
  date_end: faker.date.future(),
  sum: faker.random.number(),
}
