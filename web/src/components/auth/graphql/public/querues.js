import { gql } from 'react-apollo'

export const UserCreateQuery = gql`
  mutation UserCreate(
    $email: String!
    $password: String!
  ) {
    UserCreate(
      email: $email
      password: $password
    ) {
      email
      password
    }
  }
`

export const JwtTokenCreateQuery = gql`
  mutation JwtTokenCreate(
    $email: String!
    $password: String!
  ) {
    JwtTokenCreate(
      email: $email
      password: $password
    ) {
      token
    }
  }
`

