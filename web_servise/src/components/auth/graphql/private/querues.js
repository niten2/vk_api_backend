import { gql } from 'react-apollo'

export const userQuery = gql`
  query user {
    user {
      name
      email
    }
  }
`
export const updateUserQuery = gql`
  mutation UserUpdate(
    $name: String,
    $email: String,
    $password: String,
  ) {
    UserUpdate(
      name: $name
      email: $email
      password: $password
    ) {
      name
      email
      password
    }
  }
`
