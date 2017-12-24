import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box } from '../src'

storiesOf('Box', module)
  .add(
    'Layout component',
    withInfo({
      text:
        'A low-level layout component for setting width, margin, padding, and color',
      inline: true
    })(() => <Box p={3}>Hello</Box>)
  )
  .add('Padding', () => <Box p={3}>Hello</Box>)
  .add('Margin', () => <Box m={3}>Hello</Box>)
  .add('Color', () => (
    <Box p={3} color="primary">
      Hello
    </Box>
  ))
  .add('Background Color', () => (
    <Box p={3} color="white" bg="accent">
      Hello
    </Box>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color="white" bg="success">
      Half Width
    </Box>
  ))
  .add('Pixel Width', () => (
    <Box p={3} width={256} color="white" bg="warning">
      256px width
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width="50vw" color="white" bg="error">
      50vw width
    </Box>
  ))
  .add('Directional Padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color="white" bg="red.5">
        Padding Top
      </Box>
      <Box m={1} pr={3} color="white" bg="orange.5">
        Padding Right
      </Box>
      <Box m={1} pb={3} color="white" bg="lime.5">
        Padding Bottom
      </Box>
      <Box m={1} pl={3} color="white" bg="teal.5">
        Padding Left
      </Box>
      <Box m={1} px={3} color="white" bg="blue.5">
        Padding X-Axis
      </Box>
      <Box m={1} py={3} color="white" bg="violet.5">
        Padding Y-Axis
      </Box>
    </Box>
  ))
  .add('Directional Margin', () => (
    <Box p={3}>
      <Box mt={3} color="slate" bg="red.1">
        Margin Top
      </Box>
      <Box mr={3} color="slate" bg="orange.1">
        Margin Right
      </Box>
      <Box mb={3} color="slate" bg="lime.1">
        Margin Bottom
      </Box>
      <Box ml={3} color="slate" bg="teal.1">
        Margin Left
      </Box>
      <Box mx={3} color="slate" bg="blue.1">
        Margin X-Axis
      </Box>
      <Box my={3} color="slate" bg="violet.1">
        Margin Y-Axis
      </Box>
    </Box>
  ))
