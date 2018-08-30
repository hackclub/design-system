import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { BlockLink, BackgroundImage, Box, Text } from '../src'

storiesOf('BlockLink', module).add(
  'BlockLink',
  withInfo({
    inline: true,
    text: `<BlockLink /> is a styled-components wrapper of <Link /> component to remove text-decoration and color styles, and set display as block.`
  })(() => (
    <BlockLink href="https://hackclub.com" target="_blank">
      <BackgroundImage src="https://hackclub.com/lah_2.jpg" width="640px">
        <Box p={4}>
          <Text align="center" color="white">
            Click to open hackclub.com in a new tab!
          </Text>
        </Box>
      </BackgroundImage>
    </BlockLink>
  ))
)
