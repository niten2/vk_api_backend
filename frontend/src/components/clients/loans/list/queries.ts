import gql from "graphql-tag"
import { graphql } from 'react-apollo'

const loansQuery = gql`
  query loans($input: LoansInput) {
    loans(input: $input) {
      id
      sum
      date_start
      date_end
      total
    }
  }
`

export const withData = graphql<any, any, any>(
  loansQuery, {
    name: "loansQuery" ,
    options: (props) => ({
      variables: {
        input: {
          client: props.client.id
        },
      },
      fetchPolicy: "network-only",
    })
  },
)
