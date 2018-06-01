import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const subscribeToLog = gql`
  subscription subscribeToLog {
    subscribeToLog {
      id
    }
  }
`

const testQuery = gql`
  query testLog {
    testLog {
      message
    }
  }
`

export const withData = compose (
  graphql<any, any, any>(
    subscribeToLog, {
      name: "subscribeToLog",
    },
  ),

  graphql<any, any, any>(
    testQuery, {
      name: "testQuery",
    },
  ),
)

