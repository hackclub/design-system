import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  propTypes
} from 'styled-system'
import theme from './theme'

const Box = styled.div([], space, width, color, fontSize, textAlign)

Box.displayName = 'Box'
Box.header = Box.withComponent('header')
Box.main = Box.withComponent('main')
Box.article = Box.withComponent('article')
Box.section = Box.withComponent('section')
Box.footer = Box.withComponent('footer')

Box.defaultProps = {
  theme
}

Box.propTypes = {
  ...propTypes.textAlign,
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.color
}

export default Box
