import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'

const src = props => props.src && { backgroundImage: `url(${props.src})` }

const height = props => props.height && { height: props.height }

const BackgroundImage = Box.extend`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.smoke};
  ${src} ${height};
`

BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.propTypes = {
  /** background-image url */
  src: PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired
}

BackgroundImage.defaultProps = {
  theme
}

export default BackgroundImage
