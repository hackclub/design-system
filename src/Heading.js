import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const Heading = Text.withComponent('h2').extend`
  line-height: 1.25;
`

Heading.displayName = 'Heading'

Heading.defaultProps = {
  theme,
  regular: true,
  f: 5,
  m: 0
}

Heading.h1 = styled(Heading.withComponent('h1'))``
Heading.h1.defaultProps = {
  bold: true,
  f: 6,
  m: 0
}

Heading.h2 = Heading.withComponent('h2')
Heading.h2.defaultProps = {
  bold: true,
  f: 5,
  m: 0
}

Heading.h3 = Heading.withComponent('h3')
Heading.h3.defaultProps = {
  bold: true,
  f: 4,
  m: 0
}

Heading.h4 = Heading.withComponent('h4')
Heading.h4.defaultProps = {
  regular: true,
  f: 3,
  m: 0
}

Heading.h5 = Heading.withComponent('h5')
Heading.h5.defaultProps = {
  bold: true,
  f: 2,
  m: 0
}

Heading.h6 = Heading.withComponent('h6')
Heading.h6.defaultProps = {
  bold: true,
  caps: true,
  f: 0,
  m: 0
}

export default Heading
