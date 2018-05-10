import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Icon } from '../src'

storiesOf('Icon', module).add(
  'Icon component',
  withInfo({
    inline: true,
    text: 'A wrapper component for using icons from different iconsets.'
  })(() => <Icon set="md" name="flag" color="primary" size={48} />)
)
