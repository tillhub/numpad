import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NumPad from '../src/index'

storiesOf('NumPad', module)
  .add('with input field enabled', () => (
    <NumPad handleChange={action('clicked')} />
  ))
  .add('with input field disabled', () => (
    <NumPad handleChange={action('clicked')} withoutInputField />
  ))
  .add('with comma separator', () => (
    <NumPad handleChange={action('clicked')} decimalSeparator=',' />
  ))
