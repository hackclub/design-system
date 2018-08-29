import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Field } from '../src'

storiesOf('Field', module)
  .add(
    'Field component',
    withInfo({
      inline: true,
      text: 'Compound component for form fields.'
    })(() => <Field name="fname" label="First name" placeholder="Zach" />)
  )
  .add('with error', () => (
    <Field
      name="email"
      type="email"
      label="Email"
      placeholder="zach@hackclub.com"
      error="can’t be blank"
    />
  ))
  .add('textarea type', () => (
    <Field
      name="comment"
      type="textarea"
      label="Write a comment"
      placeholder="Be nice :)"
    />
  ))
  .add('select type', () => (
    <Field name="select" type="select" label="Select something">
      <option>Two</option>
      <option>Four</option>
      <option>Eight</option>
      <option>Sixteen</option>
      <option>Thirty-Two</option>
      <option>Sixty-Four</option>
    </Field>
  ))
