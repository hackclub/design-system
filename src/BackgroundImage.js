import Box from './Box'
import PropTypes from 'prop-types'
import theme from './theme'
import styled, { css } from 'styled-components'

const src = props => props.src && { backgroundImage: `url(${props.src})` }

const height = props => props.height && { height: props.height }

const BackgroundImage = styled(Box)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${src} ${height};

  ${props =>
    props.scale &&
    css`
      overflow: hidden;
      transition: ${({ theme }) => theme.transition} background-size;
      will-change: background-size;
      background-size: auto ${({ theme }) => theme.scaleFactor * 100}%;
      &:hover {
        background-size: auto
          ${({ theme }) => (theme.scaleFactor + 1 / 16) * 100}%;
      }
      ${({ theme }) => theme.mediaQueries.reduceMotion} {
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
  theme,
  bg: 'smoke'
}

export default BackgroundImage
