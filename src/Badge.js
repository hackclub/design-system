import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const Badge = styled(Text.span)`
  border-radius: ${({ theme }) => theme.pill};
  display: inline-block;
  font-weight: normal;
  letter-spacing: 0.0375em;
  line-height: 1.125;
  text-transform: uppercase;
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
