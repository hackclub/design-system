import React from 'react'
import renderer from 'react-test-renderer'
import { Field } from '..'

describe('Field', () => {
  test('renders', () => {
    const json = renderer
      .create(<Field id="renders" label="Renders" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
