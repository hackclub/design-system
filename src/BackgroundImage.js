import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : null

const height = props => (props.height ? { height: props.height } : null)

const BackgroundImage = Box.extend`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.smoke};
  ${image} ${height};
`

BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.propTypes = {
  /** background-image url */
  image: PropTypes.string
}

BackgroundImage.defaultProps = {
  theme
}

export default BackgroundImage
