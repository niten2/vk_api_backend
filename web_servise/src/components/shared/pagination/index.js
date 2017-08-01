import React from 'react'
import { Link } from 'lib/nav_link'

const Numbers = ({ page, currentPage, href }) => (
  <li className={ page === currentPage ? "page-item active" : "page-item"}>
    <Link
      className="page-link"
      href={`${href}/${page}`}
    >{page}</Link>
  </li>
)

const Pagination = (props) => {
  console.log(props)
  let { perPage, count, href, currentPage } = props
  const pages = Math.ceil(count / perPage) || 1

  const pagesArray = Array.from({ length: pages }, (v, k) => k + 1)
  const prev = currentPage > 1 ? currentPage - 1 : currentPage
  const next = currentPage < pages ? currentPage + 1 : pages


  return (
    <ul className="pagination">

      <li className="page-item">
        <Link
          className="btn active page-link"
          href={`${href}/${prev}`}
        >Prev</Link>
      </li>

      { pagesArray.map((page, index) =>
        <Numbers
          key={index}
          page={page}
          currentPage={currentPage}
          href={href}
        />
      )}

      <li className="page-item">
        <Link
          className="active page-link"
          href={`${href}/${next}`}
        >Next</Link>
      </li>

    </ul>
  )
}

export default Pagination
