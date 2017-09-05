import React from 'react'
import { mount } from 'enzyme'
import App from './index'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { MemoryRouter } from 'react-router-dom'

chai.use(chaiEnzyme())


it('renders without crashing', () => {
  // shallow(<App />);
  const currentPage = 1
  const perPage = 2
  const count = 4
  const href = "/test"

  // const context = { router: { isActive: (a, b) => true } };
  // console.log(context)
  // const renderedComponent = shallow(<NavLink to="/home" />);


  const wrapper = mount(<MemoryRouter><App
    currentPage={currentPage}
    perPage={perPage}
    count={count}
    href={href}
    currentPage={currentPage}
  /></MemoryRouter>)

  console.log(wrapper.debug());

})
