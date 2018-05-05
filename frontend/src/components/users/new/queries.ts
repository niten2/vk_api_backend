import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const territoriesQuery = gql`
  query {
    territories {
      id

      name
      rate
    }
  }
`

const createUserQuery = gql`
  mutation createUser($input: UserCreateInput!) {
    createUser(input: $input) {
      id

      full_name
      email
      login
      password
      role
      phone
      territory
    }
  }
`

export const withData = compose (
  graphql<any, any, any>(
    territoriesQuery, {
      name: "territoriesQuery" ,
    }
  ),
  graphql<any, any, any>(
    createUserQuery, {
      name: "createUserQuery",
    }
  ),
)
