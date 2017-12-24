import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'
import PropTypes from 'prop-types'

const Base = styled(Button.button)`
  padding: 0 !important;
  background-color: transparent !important;
  box-shadow: none !important;

  &:hover {
    background-color: transparent;
    box-shadow: none !important;
  }
`

const IconButton = ({ name, size, color, ...props }) => (
  <Base children={<Icon name={name} size={size} color={color} />} {...props} />
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
}

export default IconButton
