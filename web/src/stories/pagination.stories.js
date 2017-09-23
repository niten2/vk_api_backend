import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Pagination from 'components/shared/pagination'

const currentPage = 1
const perPage = 2
const count = 4
const href = "/test"

storiesOf('Pagination', module).add('Pagination', () =>
  <Pagination
    currentPage={currentPage}
    perPage={perPage}
    count={count}
    href={href}
    currentPage={currentPage}
  />
)
