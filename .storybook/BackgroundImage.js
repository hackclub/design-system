import React from 'react'
import { storiesOf } from '@storybook/react'
import { BackgroundImage, Box, Text, Flex } from '../src'

const image =
  'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'

storiesOf('BackgroundImage', module)
  .add('Basic', () => (
    <BackgroundImage image={image} width={256}>
      <Box p={4}>
        <Text fontSize={6} bold align="center" color="white">
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  ))
  .add('Fixed Height', () => (
    <BackgroundImage height={256} image={image} width={512}>
      <Box p={4}>
        <Text fontSize={6} bold align="center" color="white">
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  ))
  .add('Responsive', () => (
    <BackgroundImage width={[128, 256, 512]} height={256} image={image}>
      <Box p={4}>
        <Text fontSize={6} bold align="center" color="white">
          Hello
        </Text>
      </Box>
    </BackgroundImage>
  ))
