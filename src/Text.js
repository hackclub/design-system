import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes
} from 'styled-system'
import theme from './theme'

export const caps = props => props.caps && { textTransform: 'uppercase' }

export const regular = props => props.regular && { fontWeight: 'regular' }

export const bold = props => props.bold && { fontWeight: 'bold' }

export const maxWidth = ({ maxWidth }) =>
  maxWidth && { maxWidth: `${maxWidth}rem` }

const Text = styled.p(
  [],
  fontSize,
  space,
  color,
  caps,
  textAlign,
  bold,
  regular,
  fontWeight,
  maxWidth
)

Text.displayName = 'Text'

Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  maxWidth: PropTypes.number,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color
}

Text.defaultProps = {
  theme,
  m: 0
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
