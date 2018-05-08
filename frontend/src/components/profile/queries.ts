import gql from "graphql-tag"
import { graphql, compose } from "react-apollo"

const meQuery = gql`
  query {
    me {
      id
      vk_token
      vk_active
    }
  }
`

const updateMeQuery = gql`
  mutation updateMe($input: MeUpdateInput!) {
    updateMe(input: $input) {
      id
      vk_token
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(meQuery, {
    name: "me"
  }),
  graphql<any, any, any>(updateMeQuery, {
    name: "updateMe"
  }),
)
