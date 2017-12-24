import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Link } from '../src'

storiesOf('Link', module)
  .add(
    'Link component',
    withInfo({
      inline: true,
      text: '<Text> extension for links.'
    })(() => (
      <Link href="https://hackclub.com" target="_blank">
        Homepage
      </Link>
    ))
  )
  .add('Open in same tab', () => (
    <Link href="https://hackclub.com" target="_self">
      Open the homepage in same tab
    </Link>
  ))
  .add('Color', () => (
    <Link href="https://hackclub.com" color="primary" bold>
      I’m extra Hack Club
    </Link>
  ))
