import schema from 'api/graphql/schema'

export const buildOptions = (req, res) => {
  return {
    schema: schema,
    formatError: (err) => ({ message: err.message, status: err.status }),
    context: {
      payload: req.payload,
      body: req.body,
    },
  }
}
