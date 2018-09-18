import styled from 'styled-components'
import Text from './Text'

const BlockLink = styled(Text.withComponent('a')).attrs({ color: 'inherit' })`
  display: block;
  text-decoration: none;
`

BlockLink.displayName = 'BlockLink'

export default BlockLink
