import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from './Text'

const Badge = Text.withComponent('div').extend`
  border-radius: 99999px;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

Badge.displayName = 'Badge'

Badge.defaultProps = {
  px: 2,
  py: 1,
  bg: 'primary',
  color: 'white',
  fontSize: 1
}

export default Badge
