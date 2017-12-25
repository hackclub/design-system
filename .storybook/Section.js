import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Section, Text } from '../src'

storiesOf('Section', module).add(
  'Section component',
  withInfo({
    inline: true,
    text:
      'A section component meant to be used with a solid/gradient background.'
  })(() => (
    <Section bg="accent">
      <Text>Hello</Text>
    </Section>
  ))
)
