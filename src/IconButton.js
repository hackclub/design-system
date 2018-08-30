import React from 'react'
import styled, { css } from 'styled-components'
import Icon from './Icon'
import Button from './Button'
import PropTypes from 'prop-types'
import theme from './theme'

const Base = styled(Button.button)`
  box-shadow: none !important;
  line-height: 0 !important;
  ${props =>
    props.circle &&
    css`
      padding: ${props.theme.space[props.p || 2]}px;
    `};
`

const IconButton = ({ glyph, size, color, ...props }) => (
  <Base
    children={<Icon glyph={glyph} size={size} color={color} />}
    {...props}
  />
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  glyph: PropTypes.string,
  onClick: PropTypes.func,
  circle: PropTypes.bool
}

IconButton.defaultProps = {
  theme,
  glyph: 'flag',
  bg: 'transparent',
  circle: false
}

export default IconButton
