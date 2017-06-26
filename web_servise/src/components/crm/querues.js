import { gql } from 'react-apollo'

export const ClientListQuery = gql`
  query clients {
    clients {
      id
      name
    }
  }
`
export const ClientAddQuery = gql`
  mutation addClient($name: String!) {
    addClient(name: $name) {
      id
      name
    }
  }
`
