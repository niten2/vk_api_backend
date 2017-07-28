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
export const personCreateQuery = gql`
  mutation personCreate(
    $uid: String
    $first_name: String
    $last_name: String
    $followers_count: String
    $sex: String
    $city: String
  ) {
    personCreate(
      uid: $uid
      first_name: $first_name
      last_name: $last_name
      followers_count: $followers_count
      sex: $sex
      city: $city
    ) {
      uid
      first_name
      last_name
      followers_count
      sex
      city
    }
  }
`

export const personDeleteQuery = gql`
  mutation personDelete($id: ID!) {
    personDelete(id: $id) {
      id
    }
  }
`
