import styled from 'styled-components'
import Text from './Text'
import theme from './theme'

const Heading = styled(Text).attrs({
  as: 'h2'
})`
  line-height: 1.25;
`

Heading.displayName = 'Heading'

Heading.defaultProps = {
  theme,
  regular: true,
  fontSize: 5,
  m: 0
}

Heading.h1 = styled(Heading).attrs({ as: 'h1' })``
Heading.h1.defaultProps = {
  bold: true,
  fontSize: 6,
  m: 0
}

Heading.h2 = styled(Heading).attrs({ as: 'h2' })``
Heading.h2.defaultProps = {
  bold: true,
  fontSize: 5,
  m: 0
}

Heading.h3 = styled(Heading).attrs({ as: 'h3' })``
Heading.h3.defaultProps = {
  bold: true,
  fontSize: 4,
  m: 0
}

Heading.h4 = styled(Heading).attrs({ as: 'h4' })``
Heading.h4.defaultProps = {
  regular: true,
  fontSize: 3,
  m: 0
}

Heading.h5 = styled(Heading).attrs({ as: 'h5' })``
Heading.h5.defaultProps = {
  bold: true,
  fontSize: 2,
  m: 0
}

Heading.h6 = styled(Heading).attrs({ as: 'h6' })``
Heading.h6.defaultProps = {
  bold: true,
  caps: true,
  fontSize: 0,
  m: 0
}

export default Heading
