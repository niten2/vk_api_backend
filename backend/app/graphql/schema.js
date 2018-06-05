import { makeExecutableSchema } from 'graphql-tools'
import resolvers from 'app/graphql/resolvers'
import typeDefs from 'app/graphql/typeDefs'

export default makeExecutableSchema({ typeDefs, resolvers })
