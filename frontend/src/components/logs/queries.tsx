import gql from "graphql-tag"
import { graphql } from "react-apollo"

const subscribeToLog = gql`
  subscription subscribeToLog {
    subscribeToLog {
      id
    }
  }
`

const logsQuery = gql`
  query logs {
    logs {
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

export const withData = graphql<any, any, any>(

  // subscribeToLog, {
  //   name: "usersQuery",
  // },

  // logsQuery, {
  //   name: "logsQuery",
  // },

  testQuery, {
    name: "testQuery",
  },

  // usersQuery, {
  //   name: "usersQuery",
  //   options: (props) => ({
  //     fetchPolicy: "network-only",
  //     variables: {
  //       input: {
  //         role: "manager",
  //       }
  //     }
  //   })
  // }
)
