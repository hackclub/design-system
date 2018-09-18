import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Icon, Flex, LargeButton } from '../src'

storiesOf('Icon', module)
  .add(
    'Icon component',
    withInfo({
      inline: true,
      text: 'A wrapper component for @hackclub/icons.'
    })(() => <Icon glyph="flag" color="primary" size={48} />)
  )
  .add('Examples', () => (
    <div>
      <Flex align="center" mb={3}>
        <Icon glyph="challenge" size={128} color="accent" />
        <Icon glyph="event-code" size={64} color="info" mx={2} />
        <Icon glyph="important" size={32} color="primary" />
      </Flex>
      <LargeButton
        href="https://hackclub-icons.now.sh/"
        target="_blank"
        chevronRight
      >
        See all icons
      </LargeButton>
    </div>
  ))
