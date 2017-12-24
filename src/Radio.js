import React from 'react'
import PropTypes from 'prop-types'
import { color } from 'styled-system'
import Box from './Box'
import Icon from './Icon'
import Text from './Text'
import Input from './Input'

const Radio = props => {
  const { checked, disabled } = props

  const radioIconName = checked
    ? 'radio_button_checked'
    : 'radio_button_unchecked'

  const testID = checked ? 'SELECTED' : disabled ? 'DISABLED' : 'NOT_SELECTED'

  return (
    <RadioWrap checked={checked} disabled={disabled}>
      <RadioInput id="radio-input" type="radio" {...props} />
      <Icon name={radioIconName} size={24} />
    </RadioWrap>
  )
}

const RadioWrap = Box.extend`
  color: ${props => props.theme.colors.smoke};
  line-height: 0;

  &:hover {
    ${props =>
      props.checked || props.disabled
        ? null
        : `color: ${props.theme.colors.info};`};
  }

  ~ span {
    margin-left: 0.25rem;
    font-weight: normal;
  }
`

const RadioInput = Input.extend`
  border-style: none;
  display: none;
  padding: 0;
  &:focus {
    box-shadow: none;
  }
  &:checked ~ svg {
    color: ${props => props.theme.colors.info};
  }
  &:disabled ~ svg {
    color: ${props => props.theme.colors.smoke};
  }
`

Radio.displayName = 'Radio'

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Radio
