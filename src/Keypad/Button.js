import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../styles.css'

export default function Button({
  text,
  clickHandler,
  klass,
  children,
  disabled
}) {
  function handleClick() {
    if (disabled) return
    clickHandler(text)
  }

  return (
    <span className={classnames(styles.button, klass, disabled && styles.disabled)} disabled={disabled} onClick={handleClick}>
      {children}
    </span>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  klass: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
}

Button.defaultProps = {
  klass: null
}
