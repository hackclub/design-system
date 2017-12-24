import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hide, Flex } from '../src'

storiesOf('Hide', module).add('Hide', () => (
  <Flex justify="space-between" color="white">
    <Hide xs p={2} bg="red.5">
      Hide xs
    </Hide>
    <Hide sm p={2} bg="orange.5">
      Hide sm
    </Hide>
    <Hide md p={2} bg="green.5">
      Hide md
    </Hide>
    <Hide lg p={2} bg="blue.5">
      Hide lg
    </Hide>
    <Hide xl p={2} bg="violet.5">
      Hide xl
    </Hide>
  </Flex>
))
