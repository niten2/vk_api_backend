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
      status_id
      status {
        id
        name
      }
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
      status_id
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
    $status_id: String
  ) {
    clientUpdate(
      id: $id
      name: $name
      number: $number
      phone: $phone
      note: $note
      date_birth: $date_birth
      status_id: $status_id
    ) {
      id
      name
      number
      phone
      note
      date_birth
      status_id
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


export const statusesQuery = gql`
  query statuses {
    statuses {
      id
      name
    }
  }
`
export const statusCreateQuery = gql`
  mutation statusCreate(
    $name: String
  ) {
    statusCreate(
      name: $name
    ) {
      name
    }
  }
`

export const statusUpdateQuery = gql`
  mutation statusUpdate(
    $id: ID!
    $name: String
  ) {
    statusUpdate(
      id: $id
      name: $name
    ) {
      id
      name
    }
  }
`

export const statusDelete = gql`
  mutation statusDelete($id: ID!) {
    statusDelete(id: $id) {
      id
    }
  }
`
