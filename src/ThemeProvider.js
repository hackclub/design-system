import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const fontsCss = css`
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(//hackclub.com/fonts/averta-regular.woff2) format('woff2'),
      url(//hackclub.com/fonts/averta-regular.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
  @font-face {
    font-family: Averta;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(//hackclub.com/fonts/averta-bold.woff2) format('woff2'),
      url(//hackclub.com/fonts/averta-bold.woff) format('woff');
    unicode-range: U + 0000 - F8FE, U + F900-FFFF;
  }
`

injectGlobal`
* {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -webkit-appearance: none;
  -moz-appearance: none;
}

html,
body {
  min-height: 100%;
  min-width: 100%;
}

body {
  padding: 0;
  margin: 0;
  font-size: ${theme.fontSizes[2]}px;
  font-family: ${theme.font};
  line-height: 1.5;
  position: relative;
  height: 100%;
  max-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

a {
  color: currentColor;
  text-decoration: none;
}

textarea {
  resize: none;
}
`

const ThemeProvider = ({ theme, webfonts, ...props }) => {
  if (webfonts) injectGlobal([], fontsCss)
  return (
    <Root
      theme={theme}
      {...props}
      children={<Fragment>{props.children}</Fragment>}
    />
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  webfonts: PropTypes.bool
}

ThemeProvider.defaultProps = {
  theme,
  webfonts: false
}

export default ThemeProvider
