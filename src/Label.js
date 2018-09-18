import styled from 'styled-components'
import Text from './Text'
import { propTypes } from 'styled-system'
import theme from './theme'

const Label = styled(Text.withComponent('label'))`
  display: block;

  a {
    color: ${({ theme }) => theme.colors.info};
    text-decoration: underline;
  }
`

Label.displayName = 'Label'

Label.propTypes = {
  ...propTypes.width
}

Label.defaultProps = {
  theme,
  color: 'black',
  fontSize: 2,
  w: 1
}

export default Label
