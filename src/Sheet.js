import styled from 'styled-components'
import Card from './Card'
import Container from './Container'
import theme from './theme'

const Sheet = styled(Card).attrs({ as: Container })`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.radii[2]};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.0625);
`

Sheet.displayName = 'Sheet'

Sheet.defaultProps = {
  theme,
  bg: 'rgba(255, 255, 255, 0.875)',
  p: [3, 4]
}

export default Sheet
