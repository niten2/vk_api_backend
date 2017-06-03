// import { Deserializer, Serializer } from 'lib/serializer'
import JSONAPISerializer from 'jsonapi-serializer'

export const Deserializer = async (objects) => {
  return await new JSONAPISerializer.Deserializer().deserialize(objects)
}

export const Serializer = async (name, objects) => {
  const serializer = new JSONAPISerializer.Serializer(name, {
    attributes: [
      'name',
      'body'
    ]
  })
  let object = await serializer.serialize(objects)
  return object
}

