import React from 'react'
import MDIcon from './MDIcon'
import PropTypes from 'prop-types'

const Icon = ({ set, ...props }) => {
  const Component = {
    md: MDIcon
  }[set]
  return <Component {...props} />
}

Icon.displayName = 'Icon'

Icon.propTypes = {
  set: PropTypes.oneOf(['md'])
}

Icon.defaultProps = {
  set: 'md'
}

export default Icon
