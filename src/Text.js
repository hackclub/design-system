import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  space,
  color,
  responsiveStyle,
  propTypes
} from 'styled-system'
import theme from './theme'

export const caps = props =>
  props.caps ? { textTransform: 'uppercase' } : null

export const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

export const bold = props =>
  props.bold ? { fontWeight: props.theme.bold } : null

const align = responsiveStyle('text-align', 'align')

const Text = styled.p`
  ${fontSize} ${space} ${color} ${caps} ${bold} ${regular} ${fontWeight} ${align};
`

Text.displayName = 'Text'

const alignTypes = ['left', 'center', 'right', 'justify']
Text.propTypes = {
  align: PropTypes.oneOf(alignTypes, PropTypes.arrayOf(alignTypes)),
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
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
