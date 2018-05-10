import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, Flex } from '../src'

storiesOf('Button', module)
  .add(
    'Button component',
    withInfo({
      inline: true,
      text: 'Use the <Button /> component to render a primitive button.'
    })(() => <Button>Button</Button>)
  )
  .add('Colors', () => (
    <Flex wrap>
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
    </Flex>
  ))
  .add('Font size', () => (
    <Flex align="baseline" wrap>
      <Button mr={2} f={1}>
        Size 1
      </Button>
      <Button bg="accent" mr={2} f={2}>
        Size 2
      </Button>
      <Button bg="info" mr={2} f={3}>
        Size 3
      </Button>
      <Button bg="accent" inverted mr={2} f={4}>
        Size 4
      </Button>
    </Flex>
  ))
  .add('Width', () => <Button w={1}>Full Width</Button>)
  .add('Disabled', () => <Button disabled>Disabled</Button>)
  .add('Scale', () => <Button scale>Scale</Button>)
  .add('Chevrons', () => (
    <Flex wrap>
      <Button bg="info" mr={3} chevronLeft>
        Back
      </Button>
      <Button bg="success" chevronRight>
        Forward
      </Button>
    </Flex>
  ))
