import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Loading } from '../src'

storiesOf('Loading', module).add(
  'Loading component',
  withInfo({
    inline: true,
    text: 'An animated loading indicator. Centers itself in parent container.'
  })(() => <Loading />)
)
