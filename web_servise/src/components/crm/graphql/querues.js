import { gql } from 'react-apollo'

export const clientsQuery = gql`
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

export const clientQuery = gql`
  query client(
    $id: ID!
  ) {
    client(
      id: $id
    ) {
      id
      name
      number
      phone
      note
      date_birth
    }
  }
`

export const clientCreateQuery = gql`
  mutation clientCreate(
    $name: String
    $number: String
    $phone: String
    $note: String
    $date_birth: String
  ) {
    clientCreate(
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

export const clientUpdate = gql`
  mutation clientUpdate(
    $id: ID!
    $name: String
    $number: String
    $phone: String
    $note: String
    $date_birth: String
  ) {
    clientUpdate(
      id: $id
      name: $name
      number: $number
      phone: $phone
      note: $note
      date_birth: $date_birth
    ) {
      id
      name
      number
      phone
      note
      date_birth
    }
  }
`

export const clientDelete = gql`
  mutation clientDelete($id: ID!) {
    clientDelete(id: $id) {
      id
    }
  }
`


export const statusQuery = gql`
  query status {
    status {
      id
      name
    }
  }
`
