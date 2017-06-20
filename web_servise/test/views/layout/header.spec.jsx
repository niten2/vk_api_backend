import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Header from 'layout/header'
import { UIStore } from 'stores'

describe("<Header />", function() {

  let wrapper
  function mockReactRouter() { function isActive() {} }

  beforeEach(function () {
    wrapper = shallow(<Header />, { router: mockReactRouter() })
  })

  it("contains spec with links", function() {
    const isPresent = wrapper
      .find('NaviLinkHeader')
      .someWhere(link => link.props().to === '/posts')
    expect(isPresent).to.equal(true)
  })

  it("contains spec with links", function() {
    const isPresent = wrapper
      .find('NaviLinkHeader')
      .someWhere(link => link.props().to === '/users')
    expect(isPresent).to.equal(true)
  })

  it("contains spec with links", function() {
    const isPresent = wrapper
      .find('NaviLinkHeader')
      .someWhere(link => link.props().to === '/comments')
    expect(isPresent).to.equal(true)
  })

  it("contains spec with links", function() {
    UIStore.login = true
    expect(wrapper.find('RenderLogout')).to.have.length(1)
    expect(wrapper.find('UserName')).to.have.length(1)
  })

  it("contains spec with links", function() {
    UIStore.login = false
    expect(wrapper.find('RenderLogin')).to.have.length(1)
  })

})

