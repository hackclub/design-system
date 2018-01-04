import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Box, Input, Label, theme } from '../src'

storiesOf('Input', module)
  .add(
    'Input component',
    withInfo({
      inline: true,
      text:
        'Simple styled input component that accepts a color and optionally, an error message.'
    })(() => <Input my={3} id="hello" />)
  )
  .add('With external label', () => (
    <Box width={256}>
      <Label fontSize={4} htmlFor="sample-input">
        Label!
      </Label>
      <Input id="sample-input" placeholder="Click the label" />
    </Box>
  ))
