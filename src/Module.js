import React from 'react'
import Flex from './Flex'
import Icon from './Icon'
import Heading from './Heading'
import Text from './Text'
import PropTypes from 'prop-types'

const ModuleBase = Flex.extend.attrs({
  w: [1, 1 / 3],
  p: 2,
  flexDirection: ['row', 'column'],
  align: ['flex-start', 'center']
})`
  text-align: left;
  svg { flex-shrink: 0; }
  ${props => props.theme.mediaQueries.md} {
    max-width: 20rem;
  }
`

const Module = ({ icon, heading, body, color = 'white', ...props }) => (
  <ModuleBase color={color}>
    <Icon size={3 * 16} mr={[2, 0]} name={icon} color={color} />
    <div>
      <Heading.h2 my={1} fontSize={3} children={heading} />
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

export default Module
