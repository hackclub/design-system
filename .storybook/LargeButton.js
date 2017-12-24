import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { LargeButton } from '../src'

storiesOf('LargeButton', module)
  .add(
    'LargeButton component',
    withInfo({
      inline: true,
      text: 'A bigger <Button /> component.'
    })(() => <LargeButton>Button</LargeButton>)
  )
  .add('Colors', () => (
    <div>
      <LargeButton mr={3}>Button</LargeButton>
      <LargeButton bg="accent" mr={3}>
        Accent
      </LargeButton>
      <LargeButton bg="success" mr={3}>
        Success
      </LargeButton>
      <LargeButton bg="accent" inverted mr={3}>
        Inverted
      </LargeButton>
    </div>
  ))
  .add('Width', () => <LargeButton w={1}>Full Width</LargeButton>)
  .add('Disabled', () => <LargeButton disabled>Disabled</LargeButton>)
