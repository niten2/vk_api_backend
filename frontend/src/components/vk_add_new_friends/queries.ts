import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const createVkFriendsQuery = gql`
  mutation createVkFriends($input: CreateVkFriendsInput!) {
    createVkFriends(input: $input) {
      message
    }
  }
`

export const withData = compose (
  graphql<any, any, any>(
    createVkFriendsQuery, {
      name: "createVkFriendsQuery" ,
    }
  ),
)
