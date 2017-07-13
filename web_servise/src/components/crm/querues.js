import { gql } from 'react-apollo'

export const ClientsQuery = gql`
  query clients {
    clients {
      id
      name
      number
      phone
      note
      date_birth
    }
  }
`

export const AddClientQuery = gql`
  mutation addClient(
    $name: String!
    $number: String
    $phone: String
    $note: String
    $date_birth: String
  ) {
    addClient(
      name: $name
      number: $number
      phone: $phone
      note: $note
      date_birth: $date_birth
    ) {
      name
      number
      phone
      note
      date_birth
    }
  }
`

export const ClientDelete = gql`
  mutation ClientDelete($id: ID!) {
    ClientDelete(id: $id) {
      id
    }
  }
`
