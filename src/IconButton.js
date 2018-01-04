import React from 'react'
import Icon from './Icon'
import Button from './Button'
import PropTypes from 'prop-types'
import theme from './theme'

const Base = Button.button.extend`
  box-shadow: none !important;
  line-height: 0 !important;
  ${props =>
    props.circle
      ? {
          borderRadius: '9999px',
          padding: props.theme.space[props.p || 2] + 'px'
        }
      : null};
`

const IconButton = ({ name, size, color, ...props }) => (
  <Base children={<Icon name={name} size={size} color={color} />} {...props} />
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool
}

IconButton.defaultProps = {
  theme,
  bg: 'transparent',
  circle: false
}

export default IconButton
