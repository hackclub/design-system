import React, { Fragment } from 'react'
import { ThemeProvider as Root, createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import theme from './theme'

const FontsCss = createGlobalStyle`
  @font-face {
    font-family: 'Phantom Sans';
    src: url('https://hackclub.com/fonts/Phantom_Sans_0.4/Regular.woff')
        format('woff'),
      url('https://hackclub.com/fonts/Phantom_Sans_0.4/Regular.woff2')
        format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Phantom Sans';
    src: url('https://hackclub.com/fonts/Phantom_Sans_0.4/Bold.woff')
        format('woff'),
      url('https://hackclub.com/fonts/Phantom_Sans_0.4/Bold.woff2')
        format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    line-height: 1.375;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  strong {
    font-weight: bold;
  }

  pre,
  code,
  kbd {
    font-family: ${theme.mono};
  }
`

const ThemeProvider = ({ theme, webfonts, ...props }) => (
  <Root
    theme={theme}
    {...props}
    children={
      <Fragment>
        {webfonts && <FontsCss />}
        <GlobalStyle />
        {props.children}
      </Fragment>
    }
  />
)

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  webfonts: PropTypes.bool
}

ThemeProvider.defaultProps = {
  theme,
  webfonts: false
}

export default ThemeProvider
