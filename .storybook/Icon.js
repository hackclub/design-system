import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon, Flex, Box, Text } from '../src'
import icons from '../icons.js'

storiesOf('Icon', module)
  .add('Icons', () => (
    <Box p={2} color="white" bg="blue.5">
      <Flex wrap>
        {Object.keys(icons).map(name => (
          <Box key={name} w={[1 / 3, 1 / 5, 1 / 6, 1 / 8]} mx={2} my={3}>
            <Icon name={name} size={48} />
            <Text fontSize={0}>{name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  ))

  .add('Color', () => (
    <div>
      <Icon color="red.5" size={48} m={2} name="favorite" />
      <Icon color="blue.5" size={48} m={2} name="build" />
      <Icon color="green.5" size={48} m={2} name="done" />
    </div>
  ))
