import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import PropTypes from 'prop-types'

const Banner = props => (
  <Box {...props}>
    <Flex justify="space-between" align="flex-start">
      {!!props.iconName &&
        !!props.showIcon && <Icon name={iconName} mr={3} size={24} mt="-2px" />}
      <Box width={1} align={props.textAlign}>
        <Heading.h5>{props.header}</Heading.h5>
        <Text.span fontSize={1}>{props.text}</Text.span>
        {props.children}
      </Box>
      {!!props.onClose && (
        <CloseButton
          onClick={props.onClose}
          ml={3}
          size={14}
          mt={1}
          title="close"
        />
      )}
    </Flex>
  </Box>
)

Banner.displayName = 'Banner'

Banner.propTypes = {
  header: PropTypes.string,
  iconName: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.node,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  bg: 'green',
  textAlign: 'left',
  showIcon: true
}

export default Banner
