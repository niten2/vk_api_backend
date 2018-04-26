// import { redirectVk } from "api/services/fetch"

export const VkQuery = {
  persons: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data.persons
  },
  groups: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data.groups
  },
  tags: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data.tags
  },
}

export const VkMutation = {
  createPerson: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  updatePerson: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  deletePerson: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  createGroup: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  updateGroup: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  deleteGroup: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  createTag: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  updateTag: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },

  deleteTag: async (_, args, context, info) => {
    const response = await redirectVk(context)
    return response.data
  },
}
