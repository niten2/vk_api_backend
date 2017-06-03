const JSONAPISerializer = require('jsonapi-serializer').Serializer
// import { Serializer } from 'jsonapi-serializer'

const object =  new JSONAPISerializer('posts', {
  attributes: ['name', 'body']
})

export default object
