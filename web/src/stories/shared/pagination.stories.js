import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MemoryRouter } from 'react-router-dom'
import App from './index'

const currentPage = 1
const perPage = 2
const count = 4
const href = "/test"

storiesOf('pagination', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('first page', () => (
    <App
      perPage={perPage}
      count={count}
      href={href}
      currentPage={1}
    />
  ))
  .add('medium', () => (
    <App
      currentPage={5}
      perPage={10}
      count={100}
      href={href}
    />
  ))
  .add('last page', () => (
    <App
      currentPage={10}
      perPage={10}
      count={100}
      href={href}
    />
  ))
