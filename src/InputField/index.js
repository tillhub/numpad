import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../styles.css'

export default class InputField extends Component {
  state = {
    input: this.props.startValue || 0
  }

  // validate(string) {
  //   let result = string.trim()
  //   result = result.replace(/([^\d\.-]*)/g, '') // eslint-disable-line
  //   return result
  // }

  handleInput = (e) => {
    // const validatedText = this.validate(e.target.value)

    this.setState({ input: e.target.value }, () => {
      this.props.handleChange(this.state.input)
    })
  }

  render() {
    return (
      <input
        className={classnames(styles.inputField)}
        value={(parseInt(this.state.input, 10))}
        onChange={this.handleInput}
        disabled={this.props.disabled}
      />
    )
  }
}

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  startValue: PropTypes.number,
  disabled: PropTypes.bool.isRequired
}

InputField.defaultProps = {
  startValue: null
}
