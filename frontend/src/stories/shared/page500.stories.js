import React from 'react';
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import App from './index'

storiesOf('page500', module).add('main', () => (<App/>))
