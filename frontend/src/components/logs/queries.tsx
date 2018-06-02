import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const subscribeToLog = gql`
  subscription subscribeToLog($input: SubscribeToLogInput!) {
    subscribeToLog(input: $input) {
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
      options: (props) => ({
        variables: {
          input: {
            // TODO change
            userId: 1,
          }
        },
      }),
    },
  ),

  graphql<any, any, any>(
    testQuery, {
      name: "testQuery",
    },
  ),
)

