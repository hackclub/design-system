import styled from 'styled-components'
import Flex from './Flex'
import theme from './theme'

const Section = styled(Flex)`
  text-align: center;
`

Section.displayName = 'Section'

Section.defaultProps = {
  theme,
  align: 'center',
  justify: 'center',
  flexDirection: 'column',
  color: 'white',
  py: [4, 5],
  px: 3
}

export default Section
