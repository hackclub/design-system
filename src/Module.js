import React from 'react'
import Flex from './Flex'
import Icon from './Icon'
import Heading from './Heading'
import Text from './Text'
import PropTypes from 'prop-types'

const ModuleBase = Flex.extend`
  text-align: left;
  svg {
    flex-shrink: 0;
  }
  ${props => props.theme.mediaQueries.md} {
    align-items: center;
    flex-direction: column;
    max-width: 20rem;
    text-align: center;
  }
`

const Module = ({ icon, heading, body, color, ...props }) => (
  <ModuleBase color={color} {...props}>
    <Icon size={3 * 16} mr={[2, null, 0]} mb={1} name={icon} color={color} />
    <div>
      <Heading.h2 mb={1} fontSize={3} children={heading} />
      <Text m={0} fontSize={2} children={body} />
    </div>
  </ModuleBase>
)

Module.displayName = 'Module'

Module.propTypes = {
  heading: PropTypes.string.isRequired,
  body: PropTypes.string,
  icon: PropTypes.string.isRequired
}

Module.defaultProps = {
  color: 'white',
  p: 2,
  w: [1, 1 / 3]
}

export default Module
