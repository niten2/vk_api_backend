import React from 'react'
import IndexPost from 'posts/index'

import { storiesOf, linkTo } from '@kadira/storybook'


const object = ({ storiesOf, action }) => {
  return storiesOf('Posts', module)
    .add('index', () => {
      return <IndexPost onClick={linkTo('Button', 'Second')} />
    })
}

export default object
