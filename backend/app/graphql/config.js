import schema from 'app/graphql/schema'

export const buildOptions = (req, res) => {
  return {
    schema: schema,
    formatError: (err) => ({ message: err.message, status: err.status }),
    context: {
      payload: req.payload,
      user_id: req.payload && req.payload.user_id,
      token: req.token,
      body: req.body,
    },
  }
}