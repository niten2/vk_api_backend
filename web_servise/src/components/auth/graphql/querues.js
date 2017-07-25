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
      id
      name
      email
      password
    }
  }
`
export const userQuery = gql`
  query user {
    user {
      id
      name
      email
    }
  }
`

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

