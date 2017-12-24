import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  space,
  width,
  color,
  fontSize,
  responsiveStyle,
  propTypes
} from 'styled-system'
import theme from './theme'

const align = responsiveStyle('text-align', 'align')
const Box = styled.div`
  ${space} ${width} ${color} ${fontSize} ${align};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color
}

export default Box
