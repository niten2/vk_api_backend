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
  let { perPage, count, href, currentPage } = props
  const pages = Math.floor(count / perPage)

  const prev = currentPage > 1 ? currentPage - 1 : currentPage
  const next = currentPage < pages ? currentPage + 1 : pages

  const pagesArray = Array.from({ length: pages }, (v, k) => k + 1)

  return (
    <ul className="pagination">

      <Link href={`${href}/${prev}`}>
        <li className="page-item">
          <a className="page-link" >Prev</a>
        </li>
      </Link>

      { pagesArray.map((page, index) =>
        <Numbers
          key={index}
          page={page}
          currentPage={currentPage}
          href={href}
        />
      )}

      <Link href={`${href}/${next}`}>
        <li className="page-item">
          <a className="page-link" >Next</a>
        </li>
      </Link>

    </ul>
  )
}

export default Pagination

// import React from 'react';
// import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';

// const WrapperComponent = ({children}) => (
//   <ul className="pagination">{children}</ul>
// );

// const withPreventDefault = (fn) => (event) => {
//   event.preventDefault();
//   fn();
// }

// const Page = ({value, isActive, onClick}) => (
//   <li className={isActive ? 'page-item active' : 'page-item'}>
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>{value}</a>
//   </li>
// );

// const Ellipsis = ({onClick}) => (
//   <li className="page-item">
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>...</a>
//   </li>
// );

// const FirstPageLink = ({onClick}) => (
//   <li className="page-item">
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>&laquo;</a>
//   </li>
// );

// const PreviousPageLink = ({onClick}) => (
//   <li className="page-item">
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>&lsaquo;</a>
//   </li>
// );

// const NextPageLink = ({onClick}) => (
//   <li className="page-item">
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>&rsaquo;</a>
//   </li>
// );

// const LastPageLink = ({onClick}) => (
//   <li className="page-item">
//     <a className="page-link" href="#" onClick={withPreventDefault(onClick)}>&raquo;</a>
//   </li>
// );

// const itemTypeToComponent = {
//   [ITEM_TYPES.PAGE]: Page,
//   [ITEM_TYPES.ELLIPSIS]: Ellipsis,
//   [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
//   [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
//   [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
//   [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
// };

// const UltimatePaginationBootstrap4 = createUltimatePagination({itemTypeToComponent, WrapperComponent});

// export default UltimatePaginationBootstrap4;
