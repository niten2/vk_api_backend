import gql from "graphql-tag"
import { compose, graphql } from "react-apollo"

const setInfoVkPersons = gql`
  subscription setInfoVkPersons {
    setInfoVkPersons {
      message
    }
  }
`

const subscribeToSetInfoVkPersons = gql`
  query subscribeToSetInfoVkPersons {
    subscribeToSetInfoVkPersons {
      message
    }
  }
`

export const withData = compose (
  graphql<any, any, any>(
    subscribeToSetInfoVkPersons, {
      name: "subscribeToSetInfoVkPersons",
      // options: (props) => ({
        // variables: {
        //   input: {
        //     // TODO change
        //     userId: 1,
        //   }
        // },
      // }),
    },
  ),

  graphql<any, any, any>(
    setInfoVkPersons, {
      name: "setInfoVkPersons",
      skip: true,
    },
  ),
)

