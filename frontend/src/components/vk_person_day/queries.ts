import gql from "graphql-tag"
import { graphql } from "react-apollo"

const vkPersonsQuery = gql`
  query vkPersons($input: VkPersonsInput) {
    vkPersons(input: $input) {
      vkPersons {
        id

        uid
        isFriend
        createdAt
      }
    }
  }
`

export const withData = graphql<any, any, any>(
  vkPersonsQuery, {
    name: "vkPersonsQuery",
    options: (props) => ({
      fetchPolicy: "network-only",
      variables: {
        input: {
          filter: {
            addFriendAt: new Date()
          }
        }
      }
    })
  }
)
