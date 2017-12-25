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
      <Badge bg="primary" mr={2}>
        primary
      </Badge>
      <Badge bg="accent" mr={2}>
        accent
      </Badge>
      <Badge bg="error" mr={2}>
        error
      </Badge>
      <Badge bg="warning" mr={2}>
        warning
      </Badge>
      <Badge bg="success" mr={2}>
        success
      </Badge>
      <Badge bg="info" mr={2}>
        info
      </Badge>
      <Badge bg="muted" mr={2}>
        muted
      </Badge>
    </Base>
  ))
