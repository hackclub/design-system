import Text from './Text'
import theme from './theme'

const Badge = Text.span.extend`
  border-radius: ${({ theme }) => theme.radius};
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.04em;
  line-height: 1.25;
  text-transform: uppercase;
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  theme,
  px: 2,
  py: 1,
  bg: 'primary',
  color: 'white',
  f: 1
}

export default Badge
