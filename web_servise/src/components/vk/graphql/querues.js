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

