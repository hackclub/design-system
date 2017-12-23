import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Container } from '../src'

storiesOf('Container', module)
  .add(
    'Container component',
    withInfo({
      inline: true,
      text:
        '<Box> to constrain the width of content and center it. Uses theme.maxContainerWidth if no maxWidth is provided'
    })(() => (
      <Container p={4} bg="smoke" style={{ height: '100vh' }}>
        Container Component
      </Container>
    ))
  )
  .add('Custom maxWidth', () => (
    <Container maxWidth={32} p={4} bg="smoke" style={{ height: '100vh' }}>
      32rem-width Container
    </Container>
  ))
