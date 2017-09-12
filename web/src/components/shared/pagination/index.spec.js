import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import App from './index'
import chai from 'chai'

import { MemoryRouter } from 'react-router-dom'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const currentPage = 1
const perPage = 2
const count = 4
const href = "/test"

storiesOf('test', module).add('with text', () => (
  <App
    currentPage={currentPage}
    perPage={perPage}
    count={count}
    href={href}
    currentPage={currentPage}
  />
))



it('renders without crashing', () => {
  // const currentPage = 1
  // const perPage = 2
  // const count = 4
  // const href = "/test"

  const wrapper = mount(<MemoryRouter><App
    currentPage={currentPage}
    perPage={perPage}
    count={count}
    href={href}
    currentPage={currentPage}
  /></MemoryRouter>)

  // console.log(wrapper.debug());

  // const ul = <ul className="pagination">

  // expect(wrapper.contains(ul)).toEqual(true);

  // expect(sum(1, 2)).toEqual(3);

  // const div = document.createElement('div');
  // const z = ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
  // console.log(z)
})
