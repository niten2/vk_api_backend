import { graphql } from 'graphql'
import { createJwt } from "app/services/jwt"
import { Context } from "app/graphql/config"
import schema from 'app/graphql/schema'

export default async (options) => {
  const { query, variableValues, rootValue, user, unauth } = options
  const context = await buildContext(user, unauth)

  return await graphql(schema, query, rootValue || {}, context, variableValues || {})
}

const buildContext = async (user, unauth) => {
  let token = null

  if (!unauth && !user) {
    const user = await factory.create("user")
    token = await createJwt(user)
  }

  if (user) {
    token = await createJwt(user)
  }

  return {
    token
  }
}
