import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Submit } from '../src'

storiesOf('Submit', module).add(
  'Submit component',
  withInfo({
    inline: true,
    text: 'A form component for a submit button. Available in two sizes.'
  })(() => (
    <form>
      <Submit value="Standard" mr={3} />
      <Submit.lg value="Large" />
    </form>
  ))
)
