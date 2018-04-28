import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Divider, Flex } from '../src'

storiesOf('Divider', module)
  .add(
    'Divider component',
    withInfo({
      text: 'Styled <hr /> with settings for padding, margin, width, and color',
      inline: true
    })(() => <Divider />)
  )
  .add('Margin', () => <Divider m={3} />)
  .add('Width', () => <Divider m={3} width={1 / 2} />)
  .add('Pixel width', () => <Divider width={256} />)
  .add('VW width', () => <Divider width="50vw" />)
  .add('Color', () => <Divider m={3} color="accent" />)
  .add('Height', () => <Divider m={3} color="accent" height="4px" />)
  .add('Directional margin', () => (
    <div>
      <Divider mt={3} />
      <Divider mr={3} />
      <Divider mb={3} />
      <Divider ml={3} />
      <Divider mx={3} />
      <Divider my={3} />
    </div>
  ))
  .add('Inside flex column', () => (
    <Flex flexDirection="column">
      <Divider />
      <Divider ml={4} mr={4} />
      <Divider ml={4} />
      <Divider ml={4} mr={5} />
      <Divider mx={2} />
    </Flex>
  ))
