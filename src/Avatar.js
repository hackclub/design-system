import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'

const px = a => (typeof a === 'number' ? `${a}px` : a)

const Avatar = Box.withComponent('img').extend`
  border-radius: ${props => props.theme.pill};
  display: inline-block;
  width: ${props => px(props.size)};
  height: ${props => px(props.size)};
`

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Avatar.defaultProps = {
  theme,
  size: 48
}

export default Avatar
