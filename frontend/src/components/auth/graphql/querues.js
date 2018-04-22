import { gql } from 'react-apollo'

export const createUserQuery = gql`
  mutation m($input: UserInput!) {
    createUser(input: $input) {
      id
    }
    errors
  }
`

export const createJwtTokenQuery = gql`
  mutation createJwtToken($input: JwtTokenInput!) {
    createJwtToken(input: $input) {
      token
    }
  }
`


export const userQuery = gql`
  query user {
    user {
      name
      email
    }
  }
`
export const settingQuery = gql`
  query settings {
    settings {
      name
      value
    }
  }
`

export const updateUserQuery = gql`
  mutation updateUser($input: UserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`

export const createSettingQuery = gql`
  mutation createSetting($input: SettingInput!) {
    createSetting(input: $input) {
      id
    }
  }
`

export const updateSettingQuery = gql`
  mutation updateSetting($input: SettingInput!) {
    updateSetting(input: $input) {
      id
    }
  }
`

export const deleteSettingQuery = gql`
  mutation deleteSetting($input: IdInput!) {
    deleteSetting(input: $input) {
      id
    }
  }
`
