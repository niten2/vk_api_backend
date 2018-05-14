const user_attr = `
  id

  name
  email

  createdAt
  updatedAt
`

const vkPerson_attr = `
  id

  uid

  createdAt
  updatedAt
`

export default {

  user_attr,
  vkPerson_attr,

  user_json: expect.objectContaining({
    id: expect.any(String),

    name: expect.any(String),
    email: expect.any(String),

    createdAt: expect.any(String),
    updatedAt: expect.any(String),
  }),

  errors_json: expect.objectContaining({
    message: expect.any(String),
    locations: expect.any(Array),
  }),

  errors_unauthorized_json: expect.objectContaining({
    message: "token not found",
    locations: expect.any(Array),
  }),

  payload_json: expect.objectContaining({
    user_id: expect.any(String),
    email: expect.any(String),
    iat: expect.any(Number),
    exp: expect.any(Number),
  }),

  user_db: expect.objectContaining({
    id: expect.any(Number),

    email: expect.any(String),
    password: expect.any(String),

    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  }),

}
