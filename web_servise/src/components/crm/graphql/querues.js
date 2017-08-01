import { gql } from 'react-apollo'

export const clientsQuery = gql`
  query clients($pagination: PaginationInput) {
    clients(pagination: $pagination) {
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
    meta(name: "Client") {
      count
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

export const createClientQuery = gql`
  mutation createClient($input: ClientInput!) {
    createClient(input: $input) {
      id
    }
  }
`

export const updateClientQuery = gql`
  mutation updateClient($input: ClientInput!) {
    updateClient(input: $input) {
      id
    }
  }
`

export const deleteClientQuery = gql`
  mutation deleteClient($input: IdInput!) {
    deleteClient(input: $input) {
      id
    }
  }
`


// NOTE Status
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
