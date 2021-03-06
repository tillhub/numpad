import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Keypad from './Keypad'

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
`

const StyledInput = styled.input`
  padding: 30px 0;
  text-align: center;
  font-size: 80px;
  border: none;
  width: 100%;
  margin-bottom: 30px;
`

const DEFAULT_WIDTH = '400px'

export default class NumPad extends Component {
  state = {
    input: this.props.startValue
  }

  validate(string) {
    if (string === '') return true

    // regex matches single 0, single minus,
    // positive/negative decimal numbers (up to 2 digits after separator),
    // empty string
    let regex
    if (this.props.decimalSeparator === ',') {
      regex = /^$|^-?(0|[1-9][0-9]*)(,?|,[0-9][0-9]?)$|^-$/g
    } else {
      regex = /^$|^-?(0|[1-9][0-9]*)(\.?|\.[0-9][0-9]?)$|^-$/g
    }

    return regex.test(string)
  }

  removeLeadingZero(string) {
    if (!string) return ''
    return string.replace(/^0(?=[0-9-])/g, '')
  }

  setDisplayText = text => {
    const displayText = this.removeLeadingZero(text)

    if (!this.validate(displayText)) return null

    return this.setState({ input: displayText }, () => {
      this.props.handleChange(this.state.input)
    })
  }

  removeLastCharacter(str) {
    if (!str) return str
    return str.trim().slice(0, -1)
  }

  handleKeypadPress = key => {
    const { input } = this.state

    let text

    if (key === 'back') {
      text = this.removeLastCharacter(input && input.toString())
    } else if (key === 'C') {
      text = '0'
    } else {
      text = input ? `${input.toString()}${key}` : key
    }

    this.setDisplayText(text)
  }

  render() {
    const {
      disabled,
      withoutInputField,
      decimalSeparator,
      width,
      children
    } = this.props
    const { input } = this.state

    return (
      <StyledWrapper width={width}>
        <StyledInput
          data-testid="input"
          value={input || '0'}
          onChange={e => this.setDisplayText(e.target.value)}
          disabled={disabled || withoutInputField}
        />

        {children}

        <Keypad
          disabled={disabled}
          clickHandler={this.handleKeypadPress}
          decimalSeparator={decimalSeparator}
        />
      </StyledWrapper>
    )
  }
}

NumPad.propTypes = {
  handleChange: PropTypes.func,
  startValue: PropTypes.string,
  disabled: PropTypes.bool,
  withoutInputField: PropTypes.bool,
  decimalSeparator: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node
}

NumPad.defaultProps = {
  handleChange: () => { },
  startValue: '0',
  disabled: false,
  withoutInputField: false,
  decimalSeparator: '.',
  width: DEFAULT_WIDTH,
  children: null
}
