import { gql } from 'react-apollo'

// Client
export const clientsQuery = gql`
  query clients($pagination: PaginationInput) {
    clients(pagination: $pagination) {
      id
      name
      number
      phone
      note
      date_birth
      status {
        id
        name
      }
    }
    meta(input: { name: "Client" }) {
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
  mutation updateClient($id: ID!, $input: ClientInput!) {
    updateClient(id: $id, input: $input) {
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
  query statuses($pagination: PaginationInput) {
    statuses(pagination: $pagination) {
      id
      name
    }
    meta(input: { name: "Status" }) {
      count
    }
  }
`
export const createStatusQuery = gql`
  mutation createStatus($input: StatusInput!) {
    createStatus(input: $input) {
      id
    }
  }
`

export const updateStatusQuery = gql`
  mutation updateStatus($id: ID!, $input: StatusInput!) {
    updateStatus(id: $id, input: $input) {
      id
    }
  }
`

export const deleteStatusQuery = gql`
  mutation deleteStatus($input: IdInput!) {
    deleteStatus(input: $input) {
      id
    }
  }
`
