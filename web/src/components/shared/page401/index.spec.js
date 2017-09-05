import React from 'react'
import { shallow } from 'enzyme'
import App from './index'

it('renders without crashing', () => {
  const wrapper = shallow(<App />)
})

it('contain h4', () => {
  const wrapper = shallow(<App />)
  const h4 = <h4 className="pt-3">Oops! 401 status</h4>
  expect(wrapper.contains(h4)).toEqual(true)
})
