import Flex from './Flex'

const Section = Flex.withComponent('section').extend.attrs({
  align: 'center',
  justify: 'center',
  flexDirection: 'column',
  color: 'white',
  py: [4, 5],
  px: 3
})`text-align: center;`

Section.displayName = 'Section'

export default Section
