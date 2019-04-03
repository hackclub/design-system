import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  propTypes
} from 'styled-system'
import theme, { filterProps } from './theme'

export const caps = props => props.caps && { textTransform: 'uppercase' }

export const regular = props => props.regular && { fontWeight: 'regular' }

export const bold = props => props.bold && { fontWeight: 'bold' }

export const maxWidth = ({ maxWidth }) =>
  maxWidth && { maxWidth: `${maxWidth}rem` }

const Base = props => {
  const next = filterProps(props)
  return <p {...next} />
}

const Text = styled(Base)(
  [],
  fontSize,
  space,
  color,
  caps,
  textAlign,
  regular,
  bold,
  fontWeight,
  maxWidth
)

Text.displayName = 'Text'

Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  maxWidth: PropTypes.number,
  ...propTypes.fontSize,
  ...propTypes.fontWeight,
  ...propTypes.textAlign,
  ...propTypes.space,
  ...propTypes.color
}

Text.defaultProps = {
  theme,
  m: 0
}

Text.span = styled(Text).attrs({ as: 'span' })``
Text.p = styled(Text).attrs({ as: 'p' })``
Text.s = styled(Text).attrs({ as: 's' })``

export default Text
