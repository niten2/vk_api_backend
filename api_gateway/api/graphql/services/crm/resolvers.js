export const CrmQuery = {
  clients: async (_, args) => {
    console.log(12222)
  },

  client: async (_, args) => {
    console.log(1)
  },

  statuses: async (_, args) => {
    console.log(1)
  },

  status: async (root, args) => {
    console.log(1)
  },
}

export const CrmMutation = {
  createClient: async (root, args) => {
    console.log(1)
  },

  updateClient: async (root, args) => {
    console.log(1)
  },

  deleteClient: async (root, { id }) => {
    console.log(1)
  },

  createStatus: async (root, args) => {
    console.log(1)
  },

  updateStatus: async (root, args) => {
    console.log(1)
  },

  deleteStatus: async (root, args) => {
    console.log(1)
  },
}

