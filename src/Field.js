import React from 'react'
import Label from './Label'
import Flex from './Flex'
import Text from './Text'
import Input, { InputSelect, InputTextarea } from './Input'
import Slider from './Slider'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from './theme'

export const Error = styled(Text).attrs({
  className: 'error',
  color: 'error',
  fontSize: 1,
  ml: 1,
  my: 0
})`
  font-weight: normal;
  &:before {
    content: '— ';
  }
`

const Field = ({ type, name, label, placeholder, error, ...props }) => {
  const Component =
    {
      select: InputSelect,
      slider: Slider,
      textarea: InputTextarea
    }[type] || Input
  return (
    <Label className={type} id={name} mb={2}>
      <Flex align="center" mb="2px" wrap>
        {label}
        {error && <Error children={error} />}
      </Flex>
      <Component name={name} type={type} placeholder={placeholder} {...props} />
    </Label>
  )
}

Field.displayName = 'Field'

Field.propTypes = {
  /** choose alternate field type (like email, password, textarea, or select) */
  type: PropTypes.oneOf([
    'checkbox',
    'date',
    'email',
    'file',
    'number',
    'password',
    'select',
    'tel',
    'textarea',
    'url',
    'text'
  ]),
  name: PropTypes.string.isRequired,
  /** label text */
  label: PropTypes.string.isRequired,
  /** validation message */
  error: PropTypes.string,
  /** placeholder text */
  placeholder: PropTypes.string
}

Field.defaultProps = {
  theme,
  type: 'text'
}

export default Field
