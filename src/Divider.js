import { borderColor, propTypes } from 'styled-system'
import Box from './Box'

const Divider = Box.withComponent('hr').extend`
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  ${borderColor};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  borderColor: 'smoke',
  mx: 0
}

Divider.propTypes = {
  ...propTypes.borderColor
}

export default Divider
