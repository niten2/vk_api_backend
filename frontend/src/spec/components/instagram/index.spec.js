import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Instagram from 'components/instagram'

it('renders without crashing', () => {
  mount(<Instagram />)
})
