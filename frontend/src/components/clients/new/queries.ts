import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const createClientQuery = gql`
  mutation createClient($input: ClientCreateInput!) {
    createClient(input: $input) {
      id

      full_name
      email
      passport
      phone
    }
  }
`

export const withData = compose(
  graphql<any, any, any>(
    createClientQuery, {
      name: "createClientQuery",
    },
  ),
)
