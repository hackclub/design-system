import Text from './Text'
import theme from './theme'

const Badge = Text.span.extend`
  border-radius: ${props => props.theme.radius};
  display: inline-block;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  theme,
  px: 2,
  py: 1,
  bg: 'primary',
  color: 'white',
  fontSize: 1
}

export default Badge
