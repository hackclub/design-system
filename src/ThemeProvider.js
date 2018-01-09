import React from 'react'
import PropTypes from 'prop-types'
import styled, {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'
import theme from './theme'

injectGlobal`
* { box-sizing: border-box; }
body { margin: 0; }

@font-face {
  font-family: Averta;
  font-style: normal;
  font-weight: 400;
  src: url(//hackclub.com/fonts/averta-regular.woff2) format('woff2'), url(//hackclub.com/fonts/averta-regular.woff) format('woff');
  unicode-range: U + 0000 - F8FE, U + F900-FFFF;
}
@font-face {
  font-family: Averta;
  font-style: normal;
  font-weight: 700;
  src: url(//hackclub.com/fonts/averta-bold.woff2) format('woff2'), url(//hackclub.com/fonts/averta-bold.woff) format('woff');
  unicode-range: U + 0000 - F8FE, U + F900-FFFF;
}
`

export const Base = styled.div`
  font-family: ${props => props.theme.font};
  line-height: 1.5;

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
