import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { BackgroundImage, Box, Text, Flex } from '../src'

const props = {
  src:
    'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'aria-label': 'Wooden desk with tools and chair'
}

storiesOf('BackgroundImage', module)
  .add(
    'BackgroundImage component',
    withInfo({
      inline: true,
      text: 'A <Box /> extension for adding a CSS background-image.'
    })(() => (
      <BackgroundImage {...props} width={256}>
        <Text fontSize={6} bold align="center" color="white" p={4}>
          Hello
        </Text>
      </BackgroundImage>
    ))
  )
  .add('Fixed height', () => (
    <BackgroundImage height={256} width={512} {...props}>
      <Text fontSize={6} bold align="center" color="white" p={4}>
        Height
      </Text>
    </BackgroundImage>
  ))
  .add('Responsive', () => (
    <BackgroundImage width={[128, 256, 512]} height="256px" {...props}>
      <Text fontSize={6} bold align="center" color="white" p={4}>
        Hello
      </Text>
    </BackgroundImage>
  ))
  .add('Scale', () => (
    <BackgroundImage height="512px" scale {...props}>
      <Text fontSize={6} bold align="center" color="white" p={4}>
        Hover
      </Text>
    </BackgroundImage>
  ))
