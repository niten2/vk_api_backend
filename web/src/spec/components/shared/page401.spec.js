import React from 'react'
import { shallow } from 'enzyme'
import Page401 from 'components/shared/page401'

it('renders without crashing', () => {
  const wrapper = shallow(<Page401 />)
})

it('contain h4', () => {
  const wrapper = shallow(<Page401 />)
  const h4 = <h4 className="pt-3">Oops! 401 status</h4>
  expect(wrapper.contains(h4)).toEqual(true)
})
