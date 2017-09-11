import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from './app'
// import Page404 from 'components/shared/page404'

it('renders without crashing', () => {
  shallow(<App />)
})

// it('contain Page404', () => {
//   const wrapper = shallow(<App />)
//   console.log(wrapper.debug())
//   expect(wrapper).toContainReact(Page404)
// })
