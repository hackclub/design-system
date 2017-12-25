import styled from 'styled-components'
import { space, fontSize, fontWeight, color, propTypes } from 'styled-system'
import theme from './theme'

const Label = styled.label`
  display: block;
  ${space} ${fontSize} ${color} ${fontWeight};
`

Label.displayName = 'Label'

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.fontWeight
}

Label.defaultProps = {
  theme,
  fontSize: 2,
  fontWeight: 'bold',
  color: 'black',
  w: 1
}

export default Label
