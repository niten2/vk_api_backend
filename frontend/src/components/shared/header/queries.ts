import gql from "graphql-tag"
import { graphql } from "react-apollo"

const meQuery = gql`
  query {
    me {
      name
      email
    }
  }
`

export const withData = graphql<any, any, any>(
  meQuery, {
    name: "meQuery"
  }
)
