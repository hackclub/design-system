import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> component to render a primitive button.'
    })(() => <Button>Button</Button>)
  )
  .add('Colors', () => (
    <div>
      <Button mr={2}>Button</Button>
      <Button bg="accent" mr={2}>
        Accent
      </Button>
      <Button bg="success" mr={2}>
        Success
      </Button>
      <Button bg="accent" inverted mr={2}>
        Inverted
      </Button>
    </div>
  ))
  .add('Width', () => <Button w={1}>Full Width</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
