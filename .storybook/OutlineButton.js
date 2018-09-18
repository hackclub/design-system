import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { OutlineButton, LargeButton } from '../src'

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
      <OutlineButton bg="accent" mr={3}>
        Accent
      </OutlineButton>
      <OutlineButton bg="success" mr={3}>
        Success
      </OutlineButton>
      <LargeButton bg="success">Large</LargeButton>
    </div>
  ))
  .add('Width', () => <OutlineButton width={1}>Full Width</OutlineButton>)
  .add('Disabled', () => <OutlineButton disabled>Disabled</OutlineButton>)
