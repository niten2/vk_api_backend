import gql from "graphql-tag"
import { graphql } from "react-apollo"

const clientsQuery = gql`
  query {
    clients {
      id

      full_name
      email
      passport
      phone
      total_sum_loans
    }
  }
`

export const withData = graphql<any, any, any>(
  clientsQuery, {
    name: "clientsQuery",
    options: {
      fetchPolicy: "network-only",
    }
  }
)
