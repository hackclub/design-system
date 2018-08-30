import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import HCIcon from '@hackclub/icons'

const Icon = styled(Box.withComponent(HCIcon))`
  flex: none;
`

Icon.displayName = 'Icon'

Icon.propTypes = {
  /** which icon to draw */
  glyph: PropTypes.string,
  /** width/height, numbers in px */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Icon.defaultProps = {
  glyph: 'flag',
  size: 24
}

export default Icon
