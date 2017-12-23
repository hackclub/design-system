import styled from 'styled-components'
import { space, width, color, fontSize, responsiveStyle } from 'styled-system'
import PropTypes from 'prop-types'
import theme from './theme'

const align = responsiveStyle('text-align', 'align')
const Box = styled.div`
  ${space} ${width} ${color} ${fontSize} ${align};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme: theme
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array
])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray
}

export default Box
