import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from '../styles.css'

export default function Button({
  text,
  clickHandler,
  klass,
  children
}) {
  function handleClick() {
    clickHandler(text)
  }

  return (
    <span className={classnames(styles.button, klass)} onClick={handleClick}>
      {children}
    </span>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  klass: PropTypes.string,
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  klass: null
}
