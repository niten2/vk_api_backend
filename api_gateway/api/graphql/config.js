import { formatError } from 'graphql'

import schema from 'api/graphql/schema'

// const formatErrorCustom = error => {
//    // formatError: (err) => ({ message: err.message, status: err.status }),
//   const data = formatError(error)
//   const { originalError } = error
//   data.field = originalError && originalError.field
//   return data
// }

export const buildOptions = (req, res) => {
  return {
    schema: schema,
    // formatError: formatErrorCustom,
    formatError: (err) => ({ message: err.message, status: err.status }),
    context: { payload: req.payload },
  }
}
