import {
  alignSelf,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  propTypes
} from 'styled-system'
import Box from './Box'
import PropTypes from 'prop-types'

const Flex = Box.extend`
  display: flex;
  ${alignSelf} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection} ${flex};
`

Flex.propTypes = {
  ...propTypes.alignSelf,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
  ...propTypes.flex
}

Flex.displayName = 'Flex'

export default Flex
