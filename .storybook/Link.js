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
  .add('Color underline', () => (
    <Link href="https://hackclub.com" color="primary" bold underline>
      I’m extra Hack Club
    </Link>
  ))
  .add('Chevrons', () => (
    <Link href="https://hackclub.com" fontSize={3} hoverline bold chevronRight>
      Explore more
    </Link>
  ))
