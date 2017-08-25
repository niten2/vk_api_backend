import { gql } from 'react-apollo'

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
