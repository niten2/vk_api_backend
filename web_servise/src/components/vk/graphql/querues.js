import { gql } from 'react-apollo'

export const personsQuery = gql`
  query persons {
    persons {
      id
      first_name
      uid
      first_name
      last_name
      followers_count
      sex
      city
      bdate
      crop_photo_url
      status
      createdAt
      updatedAt
    }
  }
`
export const createPersonQuery = gql`
  mutation createPerson($input: PersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`

export const updatePersonQuery = gql`
  mutation createPerson($input: PersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`

export const deletePersonQuery = gql`
  mutation deletePerson($input: IdInput!) {
    deletePerson(input: $input) {
      id
    }
  }
`
