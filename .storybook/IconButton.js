import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add(
    'IconButton component',
    withInfo({
      inline: true,
      text: 'Use the <IconButton /> component to render a primitive button.'
    })(() => (
      <IconButton name="close" color="error" onClick={action('clicked')} />
    ))
  )
  .add('Plus button', () => (
    <IconButton
      name="add"
      bg="success"
      color="white"
      circle
      onClick={action('clicked')}
    />
  ))
  .add('Disabled close button', () => (
    <IconButton
      disabled
      name="close"
      color="error"
      onClick={action('clicked')}
    />
  ))
