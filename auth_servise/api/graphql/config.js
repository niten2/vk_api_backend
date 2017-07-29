import { formatError } from 'graphql'

import schemaPublic from 'api/graphql/public/schema'
import schemaPrivate from 'api/graphql/private/schema'

const formatErrorCustom = error => {
  const data = formatError(error)
  const { originalError } = error
  data.field = originalError && originalError.field
  return data;
}

export const buildOptionsPublic = async (req, res) => {
  return {
    schema: schemaPublic,
    formatError: formatErrorCustom,
  }
}

export const buildOptionsPrivate = async (req, res) => {
  return {
    context: { payload: req.payload },
    schema: schemaPrivate,
    formatError: formatErrorCustom,
  }
}
