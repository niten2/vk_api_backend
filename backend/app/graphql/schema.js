import { makeExecutableSchema } from 'graphql-tools'
import { resolvers, pubsub } from 'app/graphql/resolvers'
import fs from 'fs'

const getTypeDefs = () => { return fs.readFileSync(__dirname + "/schema.graphql").toString() }
const typeDefs = getTypeDefs()

export default makeExecutableSchema({ typeDefs, pubsub, resolvers })
