import React from 'react'
import Icon from './MDIcon'
import Button from './Button'
import PropTypes from 'prop-types'
import theme from './theme'

const Base = Button.button.extend`
  box-shadow: none !important;
  line-height: 0 !important;
  ${props =>
    props.circle && { padding: props.theme.space[props.p || 2] + 'px' }};
`

const IconButton = ({ set, name, size, color, ...props }) => {
  const Icon = {
    md: MDIcon
  }[set]
  return (
    <Base
      children={<Icon name={name} size={size} color={color} />}
      {...props}
    />
  )
}

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  set: PropTypes.oneOf(['md']),
  name: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool
}

IconButton.defaultProps = {
  theme,
  set: 'md',
  bg: 'transparent',
  circle: false
}

export default IconButton
