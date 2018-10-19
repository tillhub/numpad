import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.div`
  background: lightgrey;
  text-align: center;
  border-radius: 4px;
  line-height: 40px;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;

  ${({ disabled }) =>
    disabled === false &&
    css`
      &:hover {
        background-color: rgba(238, 159, 89, 0.5);
      }

      &:active {
        background-color: rgb(238, 159, 89);
        box-shadow: 0 2px #666;
        transform: translateY(2px);
      }
    `};

  ${({ disabled }) =>
    disabled &&
    css`
      color: grey;
      cursor: auto;

      & img {
        opacity: 0.4;
      }
    `};
`

export default function Button({
  text,
  clickHandler,
  className,
  children,
  disabled
}) {
  function handleClick() {
    if (disabled) return
    clickHandler(text)
  }

  return (
    <StyledButton
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired
}

Button.defaultProps = {
  className: null
}
