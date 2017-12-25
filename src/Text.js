import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
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
  ${fontSize} ${space} ${color} ${caps} ${regular} ${bold} ${align};
`

Text.displayName = 'Text'

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color
}

Text.defaultProps = {
  theme
}

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')
Text.s = Text.withComponent('s')

export default Text
