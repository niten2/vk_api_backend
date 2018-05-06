import gql from "graphql-tag"
import { graphql } from "react-apollo"

const createToken = gql`
  mutation createToken($input: TokenCreateInput!) {
    createToken(input: $input) {
      token
      user {
        role
      }
    }
  }
`

export const withData = graphql<any, any, any>(
  createToken, {
    name: "createToken"
  }
)
