import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.css'
import Keypad from './Keypad'

export default class NumPad extends Component {
  state = {
    input: this.props.startValue || '0'
  }

  validate(string) {
    if (string === '') return true

    // matches single 0, single minus,
    // positive/negative decimal numbers (up to 2 digits after separator),
    // empty string
    const regex = /^$|^-?(0|[1-9][0-9]*)(\.?|\.[0-9][0-9]?)$|^-$/g
    const result = regex.test(string)

    return result
  }

  removeLeadingZero(string) {
    if (!string) return ''
    return string.replace(/^0(?=[0-9])/g, '')
  }

  setDisplayText = (text) => {
    const displayText = this.removeLeadingZero(text)

    if (!this.validate(displayText)) return null

    return this.setState({ input: displayText }, () => {
      this.props.handleChange(this.state.input)
    })
  }

  removeLastCharacter (str) {
    if (!str) return str
    return str.trim().slice(0, -1)
  }

  handleKeypadPress = key => {
    const { input } = this.state

    let text

    if (key === 'back') {
      text = this.removeLastCharacter(input && input.toString())
    } else if (key === 'C') {
      text = 0
    } else {
      text = input ? `${input.toString()}${key}` : key
    }

    this.setDisplayText(text)
  }

  render () {
    const { disabled, withoutInputField } = this.props
    const { input } = this.state

    return (
      <div>
        <input
          className={classnames(styles.inputField)}
          value={input}
          onChange={e => this.setDisplayText(e.target.value)}
          disabled={disabled || withoutInputField}
        />

        <Keypad disabled={disabled} clickHandler={this.handleKeypadPress} />
      </div>
    )
  }
}

NumPad.propTypes = {
  handleChange: PropTypes.func,
  startValue: PropTypes.number,
  disabled: PropTypes.bool.isRequired,
  withoutInputField: PropTypes.bool
}

NumPad.defaultProps = {
  handleChange: () => {},
  withoutInputField: false
}
