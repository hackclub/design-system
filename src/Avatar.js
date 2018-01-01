import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'

const Avatar = Box.withComponent('img').extend`
  border-radius: 1024px;
  display: inline-block;
  width: ${props => props.size};
  height: ${props => props.size};
`

Avatar.displayName = 'Badge'

Avatar.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Avatar.defaultProps = {
  theme,
  size: '48px'
}

export default Avatar
