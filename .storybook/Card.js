import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Card } from '../src'

storiesOf('Card', module)
  .add(
    'Card component',
    withInfo({
      inline: true,
      text: 'Box extension to control box-shadow.'
    })(() => (
      <div>
        <Card
          boxShadowSize="sm"
          my={4}
          p={3}
          width={256}
          color="black"
          bg="white"
        >
          Small Shadow
        </Card>
        <Card
          boxShadowSize="md"
          my={4}
          p={3}
          width={256}
          color="black"
          bg="white"
        >
          Medium Shadow
        </Card>
        <Card
          boxShadowSize="lg"
          my={4}
          p={3}
          width={256}
          color="black"
          bg="white"
        >
          Large Shadow
        </Card>
        <Card
          boxShadowSize="xl"
          my={4}
          p={3}
          width={256}
          color="black"
          bg="white"
        >
          XLarge Shadow
        </Card>
      </div>
    ))
  )
  .add('Box Shadows with custom borders', () => (
    <div>
      <Card
        boxShadowSize="sm"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="white"
        borderWidth={2}
        borderColor="accent"
      >
        Small Shadow
      </Card>
      <Card
        boxShadowSize="md"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="orange.1"
        borderWidth={2}
        borderColor="warning"
      >
        Medium Shadow
      </Card>
      <Card
        boxShadowSize="lg"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="teal.0"
        borderWidth={2}
        borderColor="success"
      >
        Large Shadow
      </Card>
      <Card
        boxShadowSize="xl"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="red.1"
        borderWidth={2}
        borderColor="error"
      >
        XLarge Shadow
      </Card>
    </div>
  ))
  .add('Box Shadows with varying border radii', () => (
    <div>
      <Card
        boxShadowSize="sm"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="white"
        borderRadius={0}
      >
        Small Shadow
      </Card>
      <Card
        boxShadowSize="md"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="white"
        borderRadius={8}
      >
        Medium Shadow
      </Card>
      <Card
        boxShadowSize="lg"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="white"
        borderRadius={24}
      >
        Large Shadow
      </Card>
      <Card
        boxShadowSize="xl"
        my={4}
        p={3}
        width={256}
        color="black"
        bg="white"
        borderRadius="2rem"
      >
        XLarge Shadow
      </Card>
    </div>
  ))
