import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import Sidebar from 'components/shared/sidebar'
import { withProvider, withRouter, children } from 'spec/support'

it('renders login true', () => {
  let props = { settings: { login: true }}
  let wrapper = mount(withProvider(withRouter(<Sidebar children={children} />), props))

  expect(wrapper.find('[href="/crm/clients"]').length).toBe(1)
  expect(wrapper.find('[href="/crm/statuses"]').length).toBe(1)
  expect(wrapper.find('[href="/vk/persons"]').length).toBe(1)
  expect(wrapper.find('[href="/vk/groups"]').length).toBe(1)
  expect(wrapper.find('[href="/instagram"]').length).toBe(1)
})

it('renders login true', () => {
  let props = { settings: { login: false }}
  let wrapper = mount(withProvider(withRouter(<Sidebar children={children} />), props))

  expect(wrapper.find('[href="/crm/clients"]').length).toBe(0)
  expect(wrapper.find('[href="/crm/statuses"]').length).toBe(0)
  expect(wrapper.find('[href="/vk/persons"]').length).toBe(0)
  expect(wrapper.find('[href="/vk/groups"]').length).toBe(0)
  expect(wrapper.find('[href="/instagram"]').length).toBe(0)
})

