import styled from 'styled-components'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'
import { borderRadius, propTypes } from 'styled-system'

const boxShadow = props => {
  const boxShadows = {
    sm: {
      'box-shadow': props.theme.boxShadows[0]
    },
    md: {
      'box-shadow': props.theme.boxShadows.slice(0, 2).join(', ')
    },
    lg: {
      'box-shadow': props.theme.boxShadows.slice(0, 3).join(', ')
    },
    xl: {
      'box-shadow': props.theme.boxShadows.join(', ')
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = props => ({
  border:
    props.borderWidth > 0
      ? `${props.borderWidth}px solid ${props.theme.colors[props.borderColor]}`
      : null
})

const Card = styled(Box)`
  ${boxShadow} ${boxBorder} ${borderRadius};
`

Card.propTypes = {
  boxShadowSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  borderColor: PropTypes.string,
  ...propTypes.borderRadius,
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
