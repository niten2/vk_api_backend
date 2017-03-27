const JSONAPISerializer = require('jsonapi-serializer').Serializer
// import { Serializer } from 'jsonapi-serializer'

const serializer =  new JSONAPISerializer('users', {
  attributes: [
    'name',
    'email',
    "password",
  ]
})

export default serializer
