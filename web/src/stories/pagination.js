import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Pagination from 'components/shared/pagination';

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)

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
