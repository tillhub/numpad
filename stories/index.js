import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NumPad from '../src/index'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>

storiesOf('NumPad', module)
  .addDecorator(CenterDecorator)
  .add('with input field enabled', () => (
    <NumPad handleChange={action('clicked')} />
  ))
  .add('with input field disabled', () => (
    <NumPad handleChange={action('clicked')} withoutInputField />
  ))
  .add('with keypad buttons disabled', () => (
    <NumPad handleChange={action('clicked')} disabled />
  ))
  .add('with comma separator', () => (
    <NumPad handleChange={action('clicked')} decimalSeparator="," />
  ))
