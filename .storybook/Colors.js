import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box, Flex, Text, Heading, theme } from '../src'

const keys = Object.keys(theme.colors).filter(
  key => !Array.isArray(theme.colors[key])
)

const next = keys.map(key => ({ key, value: theme.colors[key] }))

const Chip = props => <Box w={1} p={5} {...props} />

const Pre = styled(Text.withComponent('pre'))`
  font-family: ${theme.mono};
`

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
    <Heading.h1 p={3} f={[4, 5]}>
      Color Palette
    </Heading.h1>
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
