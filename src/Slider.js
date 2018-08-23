import React from 'react'
import styled from 'styled-components'
import { space, width, color, propTypes } from 'styled-system'
import theme from './theme'
import PropTypes from 'prop-types'

const Slider = styled.input.attrs({ type: 'range' })`
  appearance: none;
  display: block;
  border-radius: ${({ theme }) => theme.pill};
  height: 4px;
  cursor: pointer;

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    background-color: currentColor;
    border: 0;
    border-radius: ${({ theme }) => theme.pill};
    appearance: none;
  }

  ${space} ${width} ${color};
`

Slider.displayName = 'Input'

Slider.propTypes = {
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.color
}

Slider.defaultProps = {
  theme,
  w: 1,
  bg: 'smoke',
  color: 'primary'
}

export default Slider
