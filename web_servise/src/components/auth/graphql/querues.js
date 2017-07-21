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

// const createUser = gql`
//   mutation ($email: String!, $password: String!, $name: String!, $emailSubscription: Boolean!) {
//     createUser(authProvider: {email: {email: $email, password: $password}}, name: $name, emailSubscription: $emailSubscription) {
//       id
//     }
//   }
// `

// const signinUser = gql`
//   mutation ($email: String!, $password: String!) {
//     signinUser(email: {email: $email, password: $password}) {
//       token
//     }
//   }
// `

// export const userQuery = gql`
//   query clients {
//     clients {
//       id
//       name
//       number
//       phone
//       note
//       date_birth
//     }
//   }
// `

