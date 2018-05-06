import gql from "graphql-tag"
import { compose, graphql } from 'react-apollo'

const updateUserQuery = gql`
  mutation updateUser($input: UserUpdateInput!) {
    updateUser(input: $input) {
      id
      full_name
      email
      login
      password
      role
      phone
      territory
      blocked
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    updateUserQuery, {
      name: "updateUserQuery"
    }
  ),
)
