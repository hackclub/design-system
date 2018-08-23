import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Avatar } from '../src'

storiesOf('Avatar', module)
  .add(
    'Avatar component',
    withInfo({
      inline: true,
      text: 'A circular avatar image primitive.'
    })(() => <Avatar src="https://hackclub.com/team/zach.png" size={64} />)
  )
  .add('Team', () => (
    <React.Fragment>
      {['zach.png', 'max.jpg', 'lachlan.jpg', 'mingjie.jpg', 'athul.jpg'].map(
        key => (
          <Avatar mr={2} src={`https://hackclub.com/team/${key}`} key={key} />
        )
      )}
    </React.Fragment>
  ))
