import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Flex, Box, Text, Icon, Image, Heading, Card, theme } from '../src'

storiesOf('Layout Examples', module)
  .add('Grid', () => (
    <Box p={4}>
      <Flex wrap mx={-3} color="white">
        <Box width={[1, 1 / 2]} px={3} mb={4}>
          <Box bg="indigo.4" p={3}>
            <Text>Hello</Text>
          </Box>
        </Box>
        <Box width={[1, 1 / 2]} px={3} mb={4}>
          <Box bg="indigo.5" p={3}>
            <Text>Hello</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  ))
  .add('Two-column', () => (
    <Flex color="white">
      <Box px={3} width={1 / 4}>
        <Box bg="green.6" style={{ minHeight: '50vh' }}>
          <Text p={3}>Hello</Text>
        </Box>
      </Box>
      <Box px={3} width={3 / 4}>
        <Box bg="teal.6" style={{ minHeight: '50vh' }}>
          <Text p={3}>Hello</Text>
        </Box>
      </Box>
    </Flex>
  ))
  .add('Navbar', () => (
    <Flex p={2} align="center" color="white" bg="accent">
      <Border mr={3}>
        <Icon glyph="menu" />
      </Border>
      <Text bold mx={2}>
        Hello
      </Text>
      <Text mx={2}>Navbar</Text>
      <Text ml="auto" mr={2}>
        Right Side
      </Text>
    </Flex>
  ))
  .add('Tiled Cards', () => (
    <Flex wrap>
      {cards.map(card => (
        <Box key={card.id} p={3} width={[1 / 2, 1 / 3, 1 / 4]}>
          <Tile {...card} />
        </Box>
      ))}
    </Flex>
  ))

const Border = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.smoke};
  border-radius: ${({ theme }) => theme.radius};
  line-height: 0;
`

const Tile = ({ image, title, text }) => (
  <Card boxShadowSize="sm">
    <Image src={image} width="512" height="256" />
    <Box p={2}>
      <Heading fontSize={2} bold>
        {title}
      </Heading>
      <Text fontSize={1} color="slate">
        {text}
      </Text>
    </Box>
  </Card>
)

const cards = Array.from({ length: 12 }).map((n, i) => ({
  id: i,
  title: 'Hello' + i,
  text: 'Card',
  image: `http://placehold.it/512x256/${theme.colors.accent.replace('#', '')}`
}))
