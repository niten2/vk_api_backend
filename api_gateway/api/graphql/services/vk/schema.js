export const VkQuery = `
  persons(pagination: PaginationInput): [Person]
  groups(pagination: PaginationInput): [Group]
  tags(filter: TagFilterInput, skip: Int, first: Int): [Tag]
`

export const VkMutation = `
  createPerson(input: PersonInput!): Person
  updatePerson(input: PersonInput!): Person
  deletePerson(input: IdInput!): Person

  createGroup(input: GroupInput!): Group
  updateGroup(input: GroupInput!): Group
  deleteGroup(input: IdInput!): Group

  createTag(input: TagInput!): Tag
  updateTag(input: TagInput!): Tag
  deleteTag(input: IdInput!): Tag
`

export const VkModels = `
  type Person {
    id: ID

    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
    user_id: Int

    createdAt: String
    updatedAt: String
  }

  type Group {
    id: ID
    name: String
    members_count: String
    note: String
    createdAt: String
    updatedAt: String
  }

  type Tag {
    id: ID
    name: String
    status: String
    kind: String
  }
`

export const VkInputs = `
  input PersonInput {
    uid: String
    first_name: String
    last_name: String
    followers_count: String
    sex: String
    city: String
    bdate: String
    crop_photo_url: String
    status: String
  }

  input GroupInput {
    name: String
    members_count: String
    note: String
  }

  input TagInput {
    name: String
    status: String
    kind: String
  }

  input TagFilterInput {
    OR: [TagFilterInput!]
    name: String
    status: String
  }
`
