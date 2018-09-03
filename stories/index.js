import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NumPad from '../index'

storiesOf('NumPad', module)
  .add('with text', () => (
    <NumPad clickHandler={action('clicked')} />
  ))
  .add('with some emoji', () => (
    <NumPad clickHandler={action('clicked')} />
  ))
