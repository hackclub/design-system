import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { OutlineButton } from '../src'

storiesOf('OutlineButton', module)
  .add(
    'OutlineButton component',
    withInfo({
      inline: true,
      text: 'A <Button /> component with only an outline.'
    })(() => <OutlineButton>Button</OutlineButton>)
  )
  .add('Colors', () => (
    <div>
      <OutlineButton mr={3}>Button</OutlineButton>
      <OutlineButton color="accent" mr={3}>
        Accent
      </OutlineButton>
      <OutlineButton color="success" mr={3}>
        Success
      </OutlineButton>
    </div>
  ))
  .add('Width', () => <OutlineButton w={1}>Full Width</OutlineButton>)
  .add('Disabled', () => <OutlineButton disabled>Disabled</OutlineButton>)
