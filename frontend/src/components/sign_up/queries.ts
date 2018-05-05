import gql from "graphql-tag"
import { graphql } from "react-apollo"

const createUser = gql`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      token
      user {
        name
        email
      }
    }
  }
`

export const withData = graphql<any, any, any>(
  createUser, {
    name: "createUser"
  }
)
