import { CrmFetch } from "api/services/fetch"

export const CrmQuery = {
  clients: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.clients
  },

  client: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.client
  },

  statuses: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.statuses
  },

  status: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },
}

export const CrmMutation = {
  createClient: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },

  updateClient: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },

  deleteClient: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },

  createStatus: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },

  updateStatus: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },

  deleteStatus: async (_, args, context, info) => {
    const response = await CrmFetch(context.body)
    return response.data.status
  },
}

