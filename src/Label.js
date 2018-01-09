import styled from 'styled-components'
import {
  color,
  fontSize,
  fontWeight,
  space,
  width,
  propTypes
} from 'styled-system'
import theme from './theme'

const Label = styled.label`
  display: block;
  ${space} ${fontSize} ${color} ${fontWeight};

  a {
    color: ${props => props.theme.colors.info};
    text-decoration: underline;
  }
`

Label.displayName = 'Label'

Label.propTypes = {
  ...propTypes.color,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.space,
  ...propTypes.width
}

Label.defaultProps = {
  theme,
  color: 'black',
  fontSize: 2,
  w: 1
}

export default Label
