import React from 'react'
import PropTypes from 'prop-types'
import backspaceIcon from '../images/backspace-icon.svg'
import Button from './Button'
import styles from '../styles.css'

const buttonValues = ['C', '7', '8', '9', '4', '5', '6', '1', '2', '3']

export default function Keypad({ clickHandler, disabled, decimalSeparator }) {
  const buttons = buttonValues.map(value => (
    <Button text={value} clickHandler={clickHandler} key={value} disabled={disabled} >
      {value}
    </Button>
  ))

  return (
    <div className={styles.numPad}>
      <Button text='back' klass={styles.back} clickHandler={clickHandler} disabled={disabled}>
        <img src={backspaceIcon} />
      </Button>
      {buttons}
      <Button text='0' klass={styles.zero} clickHandler={clickHandler} disabled={disabled}>
        0
      </Button>
      <Button text={decimalSeparator} clickHandler={clickHandler} disabled={disabled}>
        {decimalSeparator}
      </Button>
    </div>
  )
}

Keypad.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  decimalSeparator: PropTypes.string.isRequired
}
