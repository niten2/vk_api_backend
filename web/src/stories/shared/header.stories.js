import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProvider, withRouter } from 'specs/support'
import App from './index'

const stateIsLogin = { settings: { login: true } }

storiesOf('header', module)
  .addDecorator(story => withRouter(story()))
  .add('with login', () => (withProvider(<App />, stateIsLogin)))
  .add('without login', () => (withProvider(<App />)))
