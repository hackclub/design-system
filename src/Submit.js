import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import LargeButton from './LargeButton'
import { caps } from './Text'
import theme from './theme'

const StyledSubmit = styled(Button)`
  ${caps}
`

const Submit = props => <StyledSubmit as="input" type="submit" {...props} />

Submit.lg = props => <LargeButton as="input" type="submit" {...props} />

const attrs = {
  theme,
  caps: true
}

Submit.defaultProps = attrs
Submit.lg.defaultProps = attrs

export default Submit
