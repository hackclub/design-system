import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../src'
import styled from 'styled-components'

const Base = styled.main`
  div {
    margin-right: 1rem;
  }
`

storiesOf('Badge', module)
  .add(
    'Badge component',
    withInfo({
      inline: true,
      text: 'Use the <Badge /> component to render a primitive badge.'
    })(() => <Badge bg="primary">badge</Badge>)
  )
  .add('All colors', () => (
    <Base>
      <Badge bg="primary">primary</Badge>
      <Badge bg="accent">accent</Badge>
      <Badge bg="error">error</Badge>
      <Badge bg="warning">warning</Badge>
      <Badge bg="success">success</Badge>
      <Badge bg="info">info</Badge>
      <Badge bg="muted">muted</Badge>
    </Base>
  ))
