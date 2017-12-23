import React from 'react'
import PropTypes from 'prop-types'
import styled, {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'
import theme from './theme'

injectGlobal`body {
  margin: 0;
}`

export const Base = styled.div`
  font-family: ${props => props.theme.font};
  line-height: 1.4;

  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = props => (
  <StyledThemeProvider theme={theme}>
    <Base {...props} />
  </StyledThemeProvider>
)

export default ThemeProvider
