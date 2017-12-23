import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'
import PropTypes from 'prop-types'
import icons from '../icons.js'

const Base = ({ name, size, ...props }) => {
  const path = icons[name]
  if (!path) return false

  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentcolor"
    >
      <path d={path} />
    </svg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'check',
  size: 24
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Icon
