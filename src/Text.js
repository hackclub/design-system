import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  responsiveStyle,
  propTypes
} from 'styled-system'
import theme from './theme'
import tag from 'clean-tag'

export const caps = props =>
  props.caps ? { textTransform: 'uppercase' } : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

const Text = styled(tag)(
  [],
  fontSize,
  space,
  color,
  caps,
  textAlign,
  bold,
  regular,
  fontWeight
)

Text.displayName = 'Text'

Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color
}

Text.defaultProps = {
  theme,
  is: 'p',
  m: 0
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
