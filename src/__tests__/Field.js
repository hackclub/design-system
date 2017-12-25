import React from 'react'
import renderer from 'react-test-renderer'
import { Field } from '..'

describe('Field', () => {
  test('renders', () => {
    const json = renderer
      .create(<Field name="renders" label="Renders" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('with error', () => {
    const json = renderer
      .create(<Field name="error" label="Error" error="error message" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
