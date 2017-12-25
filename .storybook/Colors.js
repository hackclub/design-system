import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box, Flex, Text, theme } from '../src'

const RelativeBox = styled(Box)`
  position: relative;
`

const keys = Object.keys(theme.colors).filter(
  key => !Array.isArray(theme.colors[key])
)

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const Chip = props => <Box w={1} p={5} {...props} />

const Pre = Text.withComponent('pre').extend`font-family: ${theme.mono};`

const Card = ({ name, color }) => (
  <Box>
    <Chip name={name} bg={color} />
    <Text fontSize={2} m={0} bold>
      {name}
    </Text>
    <Pre fontSize={0} m={0} color="muted">
      {color}
    </Pre>
  </Box>
)

storiesOf('Color', module).add('Palette', () => (
  <div>
    <Box p={3}>
      <h1>Color Palette</h1>
    </Box>
    <Flex wrap>
      {next.map(
        color =>
          !color.key[color.key.length - 1].match(/^\d+$/) ? (
            <Box key={color.key} p={3} width={[1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]}>
              <Card name={color.key} color={color.value} />
            </Box>
          ) : null
      )}
    </Flex>
  </div>
))
