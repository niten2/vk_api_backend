import gql from "graphql-tag"
import { graphql, compose } from "react-apollo"

const meQuery = gql`
  query {
    me {
      id
      full_name
      email
      login
      password
      role
      phone
      territory
    }
  }
`

const updateMeQuery = gql`
  mutation updateMe($input: MeUpdateInput!) {
    updateMe(input: $input) {
      id
      full_name
      email
      login
      password
      role
      phone
      territory
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(meQuery, {
    name: "meQuery"
  }),
  graphql<any, any, any>(updateMeQuery, {
    name: "updateMeQuery"
  }),
)
