import styled from 'styled-components'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'
import { borderRadius, propTypes } from 'styled-system'

const boxShadow = props => {
  const boxShadows = {
    sm: theme.boxShadows[0],
    md: theme.boxShadows[1],
    lg: theme.boxShadows[2],
    xl: theme.boxShadows[3]
  }
  return { boxShadow: boxShadows[props.boxShadowSize] }
}

const boxBorder = props => ({
  border:
    props.borderWidth > 0
      ? `${props.borderWidth}px solid ${props.theme.colors[props.borderColor]}`
      : null
})

const Card = styled(Box)([], boxShadow, boxBorder, borderRadius)

Card.propTypes = {
  /** use scale alias for theme values or null to remove shadow */
  boxShadowSize: PropTypes.oneOf([null, 'sm', 'md', 'lg', 'xl']),
  borderColor: PropTypes.string,
  ...propTypes.borderRadius,
  /** use 0 to remove border */
  borderWidth: PropTypes.oneOf([0, 1, 2])
}

Card.defaultProps = {
  theme,
  borderColor: 'smoke',
  borderRadius: 1,
  borderWidth: 0
}

Card.displayName = 'Card'

export default Card
