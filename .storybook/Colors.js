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

const Chip = props =>
  props.color ? (
    <RelativeBox width={1} px={5} py={4} bg={props.color} />
  ) : (
    <Box width={1} px={5} py={4}>
      N/A
    </Box>
  )

const Pre = Text.withComponent('pre')

const Card = props => (
  <Box>
    <Chip name={props.name} color={props.color} />
    <Text f={0}>{props.name}</Text>
    <Pre m={0}>{props.color}</Pre>
  </Box>
)

const Comparison = ({ keys }) => (
  <Flex wrap>
    {keys.map(key => (
      <Flex key={key} w={[1, 1 / 2, null, 1 / 3, 1 / 4]} p={3}>
        <Box w={1 / 2}>
          <Card name={key} color={theme.colors[key]} />
        </Box>
      </Flex>
    ))}
  </Flex>
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
