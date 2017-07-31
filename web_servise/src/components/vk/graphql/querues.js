import { gql } from 'react-apollo'

// NOTE Persons
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
  mutation updatePerson($input: PersonInput!) {
    updatePerson(input: $input) {
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

// NOTE Groups
export const groupsQuery = gql`
  query groups {
    groups {
      id
      name
      members_count
      note
      createdAt
      updatedAt
    }
  }
`
export const createGroupQuery = gql`
  mutation createGroup($input: GroupInput!) {
    createGroup(input: $input) {
      id
    }
  }
`

export const updateGroupQuery = gql`
  mutation updateGroup($input: GroupInput!) {
    updateGroup(input: $input) {
      id
    }
  }
`

export const deleteGroupQuery = gql`
  mutation deleteGroup($input: IdInput!) {
    deleteGroup(input: $input) {
      id
    }
  }
`

// NOTE Tags
export const tagsQuery = gql`
  query tags($filter: TagFilterInput) {
    tags(filter: $filter) {
      id
      name
      status
      kind
    }
  }
`
export const createTagQuery = gql`
  mutation createTag($input: TagInput!) {
    createTag(input: $input) {
      id
    }
  }
`

export const updateTagQuery = gql`
  mutation updateTag($input: TagInput!) {
    updateTag(input: $input) {
      id
    }
  }
`

export const deleteTagQuery = gql`
  mutation deleteTag($input: IdInput!) {
    deleteTag(input: $input) {
      id
    }
  }
`
