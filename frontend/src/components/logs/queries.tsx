import gql from "graphql-tag"
import { graphql } from "react-apollo"

const subscribeToLog = gql`
  subscription subscribeToLog {
    subscribeToLog {
      log {
        id
      }
    }
  }
`

// const usersQuery = gql`
//   query users($input: UsersInput) {
//     users(input: $input) {
//       id

//       email
//       login
//       role
//     }
//   }

// `

export const withData = graphql<any, any, any>(

  subscribeToLog, {
    name: "usersQuery",
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
