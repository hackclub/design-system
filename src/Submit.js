import styled from 'styled-components'
import Button from './Button'
import LargeButton from './LargeButton'
import { caps } from './Text'
import theme from './theme'

const Submit = styled(Button.input).attrs({
  type: 'submit'
})([], caps)

Submit.lg = styled(LargeButton.input).attrs({
  type: 'submit'
})([], caps)

const attrs = {
  theme,
  caps: true
}

Submit.defaultProps = attrs
Submit.lg.defaultProps = attrs

export default Submit
