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
Box.header = styled(Box).attrs({ as: 'header' })``
Box.main = styled(Box).attrs({ as: 'main' })``
Box.article = styled(Box).attrs({ as: 'article' })``
Box.section = styled(Box).attrs({ as: 'section' })``
Box.footer = styled(Box).attrs({ as: 'footer' })``

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
