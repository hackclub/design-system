import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Flex, Module } from '../src'

storiesOf('Module', module).add(
  'Module component',
  withInfo({
    inline: true,
    text:
      'A responsive compound block component with an icon, heading, and text.'
  })(() => (
    <Flex p={3} bg="accent" wrap>
      <Module color="white" icon="favorite" heading="Module 1" body="Hey." />
      <Module color="white" icon="build" heading="Module 2" body="Hi." />
      <Module
        color="white"
        icon="description"
        heading="Module 2"
        body="Hello."
      />
    </Flex>
  ))
)
