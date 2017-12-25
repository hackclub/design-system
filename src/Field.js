import React from 'react'
import Label from './Label'
import Flex from './Flex'
import Text from './Text'
import Input, { InputSelect, InputTextarea } from './Input'
import PropTypes from 'prop-types'
import theme from './theme'

export const Error = Text.extend.attrs({
  className: 'error',
  color: 'error',
  f: 1,
  ml: 1,
  my: 0
})`
  font-weight: normal;
  text-transform: lowercase;
  &:before { content: '— '; }
`

const Field = ({ type, name, label, p, error, ...props }) => {
  const Component =
    {
      select: InputSelect,
      textarea: InputTextarea
    }[type] || Input
  return (
    <Label className={type} id={name} mb={2}>
      <Flex align="center" mb="2px" wrap>
        {label}
        {error && <Error children={error} />}
      </Flex>
      <Component name={name} type={type} placeholder={p} {...props} />
    </Label>
  )
}

Field.displayName = 'Field'

Field.propTypes = {
  /** choose alternate field type (like email, textarea, or select) */
  type: PropTypes.oneOf(['text', 'email', 'password', 'textarea', 'select']),
  name: PropTypes.string.isRequired,
  /** label text */
  label: PropTypes.string.isRequired,
  /** validation message */
  error: PropTypes.string,
  /** placeholder text */
  p: PropTypes.string
}

Field.defaultProps = {
  theme,
  type: 'text'
}

export default Field
