import gql from "graphql-tag"
import { compose, graphql } from 'react-apollo'

const territoriesQuery = gql`
  query {
    territories {
      id

      name
      rate
    }
  }
`

const userQuery = gql`
  query user($id: ID!) {
    user(id: $id) {
      id

      full_name
      email
      login
      phone
      role
      territory
      blocked
    }
  }
`

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

const deleteUserQuery = gql`
  mutation deleteUser($input: IdInput!) {
    deleteUser(input: $input) {
      id
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    territoriesQuery, {
      name: "territoriesQuery" ,
      options: (props) => ({
        variables: {
          id: props.match.params.id
        }
      })
    }
  ),
  graphql<any, any, any>(
    userQuery, {
      name: "userQuery" ,
      options: (props) => ({
        variables: {
          id: props.match.params.id
        }
      })
    }
  ),
  graphql<any, any, any>(
    updateUserQuery, {
      name: "updateUserQuery"
    }
  ),
  graphql<any, any, any>(
    deleteUserQuery, {
      name: "deleteUserQuery",
    }
  ),
)
