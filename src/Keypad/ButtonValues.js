import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const buttonValues = ['C', '7', '8', '9', '4', '5', '6', '1', '2', '3']

function Buttons({ clickHandler, disabled }) {
  return buttonValues.map(value => (
    <Button
      text={value}
      clickHandler={clickHandler}
      key={value}
      disabled={disabled}
    >
      {value}
    </Button>
  ))
}

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default Buttons
