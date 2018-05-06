import gql from "graphql-tag"
import { graphql } from 'react-apollo'

const clientQuery = gql`
  query client($id: ID!) {
    client(id: $id) {
      id
      full_name

      territory {
        id
        name
        rate
      }
    }
  }
`

export const withData = graphql<any, any, any>(
  clientQuery, {
    name: "clientQuery" ,
    options: (props) => ({
      variables: {
        id: props.match.params.id
      },
    })
  },
)
