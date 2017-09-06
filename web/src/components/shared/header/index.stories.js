import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import App from './index'
import { Provider } from 'react-redux'
import { configureStore } from 'store'
import { MemoryRouter } from 'react-router-dom'

const stateIsLogin = { settings: { login: true } }

storiesOf('header', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('with login', () => (<Provider store={configureStore(stateIsLogin)}><App/></Provider>))
  .add('without login', () => (<Provider store={configureStore()}><App/></Provider>))
