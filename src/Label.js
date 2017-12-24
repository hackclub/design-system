import styled from 'styled-components'
import { space, fontSize, fontWeight, color, propTypes } from 'styled-system'
import theme from './theme'

const Label = styled.label`
  display: flex;
  align-items: center;

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
  fontSize: 2,
  fontWeight: 'bold',
  color: 'black',
  w: 1,
  theme: theme
}

export default Label
