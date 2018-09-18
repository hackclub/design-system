import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../src'

storiesOf('Badge', module)
  .add(
    'Badge component',
    withInfo({
      inline: true,
      text: 'Use the <Badge /> component to render a primitive badge.'
    })(() => <Badge bg="primary">badge</Badge>)
  )
  .add('All colors', () => (
    <React.Fragment>
      {[
        'primary',
        'accent',
        'error',
        'warning',
        'success',
        'info',
        'muted'
      ].map(key => (
        <Badge mr={2} bg={key} children={key} key={key} />
      ))}
    </React.Fragment>
  ))
