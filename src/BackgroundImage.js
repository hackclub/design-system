import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'
import { css } from 'styled-components'

const src = props => props.src && { backgroundImage: `url(${props.src})` }

const height = props => props.height && { height: props.height }

const BackgroundImage = Box.extend`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.smoke};
  ${src} ${height};

  ${props => props.scale && css`
    overflow: hidden;
    transition: ${props => props.theme.transition} background-size;
    will-change: background-size;
    background-size: auto 100%;
    &:hover {
      background-size: auto ${props => props.theme.scaleFactor * 100}%;
    }
    ${props => props.theme.mediaQueries.reduceMotion} {
      transition: none;
      background-size: cover !important;
    }
  `};
`

BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.propTypes = {
  /** background-image url */
  src: PropTypes.string.isRequired,
  /** add hover animation */
  scale: PropTypes.bool,
  /** accessible label */
  'aria-label': PropTypes.string.isRequired
}

BackgroundImage.defaultProps = {
  theme
}

export default BackgroundImage
