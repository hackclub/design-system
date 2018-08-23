import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Slider } from '../src'

storiesOf('Slider', module).add(
  'Slider component',
  withInfo({
    inline: true,
    text: 'Range input slider.'
  })(() => <Slider />)
)
