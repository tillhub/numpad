import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components'
import backspaceIcon from '../images/backspace-icon.svg'
import Buttons from './ButtonValues'

const StyledKeypad = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  grid-auto-rows: 40px;
  user-select: none;
`

const StyledBackButton = styled(Button)`
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledZeroButton = styled(Button)`
  grid-column: 1/3;
`

export default function Keypad({ clickHandler, disabled, decimalSeparator }) {
  return (
    <StyledKeypad>
      <StyledBackButton
        text="back"
        clickHandler={clickHandler}
        disabled={disabled}
        data-testid="backspace"
      >
        <img src={backspaceIcon} />
      </StyledBackButton>
      <Buttons clickHandler={clickHandler} disabled={disabled} />
      <StyledZeroButton
        text="0"
        clickHandler={clickHandler}
        disabled={disabled}
      >
        0
      </StyledZeroButton>
      <Button
        text={decimalSeparator}
        clickHandler={clickHandler}
        disabled={disabled}
        data-testid="decimalSeparator"
      >
        {decimalSeparator}
      </Button>
    </StyledKeypad>
  )
}

Keypad.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  decimalSeparator: PropTypes.string.isRequired
}
