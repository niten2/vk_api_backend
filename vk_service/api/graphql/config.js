import { formatError } from 'graphql'
import schema from 'api/graphql/schema'

const formatErrorCustom = error => {
  const data = formatError(error)
  const { originalError } = error
  data.field = originalError && originalError.field
  return data
}

export const buildOptions = async (req, res) => {
  return {
    context: { payload: req.payload },
    schema: schema,
    formatError: formatErrorCustom,
  }
}
