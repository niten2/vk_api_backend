import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const subscribeToLog = gql`
  subscription subscribeToLog {
    subscribeToLog {
      id
    }
  }
`

// const logsQuery = gql`
//   query logs {
//     logs {
//       id
//     }
//   }

// `

const testQuery = gql`
  query testLog {
    testLog {
      message
    }
  }
`

export const withData = compose (
// export const withData = graphql<any, any, any>(

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

  // logsQuery, {
  //   name: "logsQuery",
  // },

  // testQuery, {
  //   name: "testQuery",
  // },

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
