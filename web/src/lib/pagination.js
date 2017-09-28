// import { pagination } from "lib/pagination"

export const pagination = (props) => {
  const page = parseInt(props.match.params.page, 10)
  const limit = props.perPage
  const offset = (page - 1) * limit

  return { limit, offset  }
}
