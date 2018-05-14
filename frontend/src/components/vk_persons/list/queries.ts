import gql from "graphql-tag"
import { graphql } from "react-apollo"

const vkPersonsQuery = gql`
  query vkPersons {
    vkPersons {
      vkPersons {
        id

        uid
        isFriend
      }
    }
  }

`
export const withData = graphql<any, any, any>(
  vkPersonsQuery, {
    name: "vkPersonsQuery",
    options: (props) => ({
      // fetchPolicy: "network-only",
      // variables: {
      //   input: {
      //     role: "manager",
      //   }
      // }
    })
  }
)
