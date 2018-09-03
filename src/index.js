import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles.css'
import Keypad from './Keypad'

export default class NumPad extends Component {
  state = {
    input: this.props.startValue || 0
  }

  removeLastCharacter (str) {
    if (!str) return str
    return str.trim().slice(0, -1)
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value }, () => {
      this.props.handleChange(this.state.input)
    })
  }

  handleKeypadPress = text => {
    const { input } = this.state

    let newText

    if (text === 'back') {
      newText = this.removeLastCharacter(input && input.toString())
    } else if (text === 'C') {
      newText = 0
    } else {
      newText = input ? `${input.toString()}${text}` : text
    }

    this.setState({ input: parseFloat(newText) })
  }

  render () {
    const { disabled } = this.props
    const { input } = this.state

    return (
      <div>
        <input
          className={classnames(styles.inputField)}
          value={(parseInt(input, 10)) || 0}
          onChange={this.handleInput}
          disabled={disabled}
        />

        <Keypad disabled={disabled} clickHandler={this.handleKeypadPress} />
      </div>
    )
  }
}

NumPad.propTypes = {
  handleChange: PropTypes.func,
  startValue: PropTypes.number,
  disabled: PropTypes.bool.isRequired
}

NumPad.defaultProps = {
  handleChange: () => {}
}
