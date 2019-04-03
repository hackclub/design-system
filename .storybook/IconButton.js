import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add(
    'IconButton component',
    withInfo({
      inline: true,
      text: 'Use the <IconButton /> component to render a primitive button.'
    })(() => <IconButton glyph="view-close" color="error" />)
  )
  .add('Rectangular button', () => (
    <IconButton
      glyph="send"
      bg="info"
      color="white"
      onClick={action('clicked')}
    />
  ))
  .add('Circular button', () => (
    <IconButton
      glyph="checkmark"
      bg="success"
      color="white"
      circle
      onClick={action('clicked')}
    />
  ))
  .add('Disabled circular buttons', () => (
    <Fragment>
      <IconButton
        disabled
        glyph="view-close"
        color="error"
        onClick={action('clicked')}
      />
      <IconButton
        disabled
        glyph="view-close"
        bg="error"
        color="white"
        circle
        onClick={action('clicked')}
      />
    </Fragment>
  ))
