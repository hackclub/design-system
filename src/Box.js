import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  space,
  width,
  color,
  fontSize,
  textAlign,
  responsiveStyle,
  propTypes
} from 'styled-system'
import theme, { filterProps } from './theme'

const Base = props => {
  const next = filterProps(props)
  return <div {...next} />
}

const Box = styled(Base)([], space, width, color, fontSize, textAlign)

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
