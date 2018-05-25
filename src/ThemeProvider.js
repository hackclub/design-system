import React, { Fragment } from 'react'
import { ThemeProvider as Root, injectGlobal, css } from 'styled-components'
import PropTypes from 'prop-types'
import defaults from './theme'

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
*,
*:before,
*:after {
  box-sizing: border-box;
  font-weight: inherit;
  text-rendering: optimizeLegibility;
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
  font-size: ${defaults.fontSizes[2]}px;
  font-family: ${defaults.font};
  line-height: ${defaults.lineHeight};
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
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
  theme: defaults,
  webfonts: false
}

export default ThemeProvider
