import Text from './Text'
import { width, propTypes } from 'styled-system'
import theme from './theme'

const Label = Text.withComponent('label').extend`
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
  f: 2,
  w: 1
}

export default Label
