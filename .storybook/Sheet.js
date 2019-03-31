import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Sheet } from '../src'

storiesOf('Sheet', module).add(
  'Sheet component',
  withInfo({
    inline: true,
    text: 'A large, raised container card.'
  })(() => (
    <Sheet maxWidth={32} color="black" my={5}>
      Hi, I’m a Sheet!
    </Sheet>
  ))
)
