import React from 'react'
import renderer from 'react-test-renderer'
import { Submit } from '..'

describe('Submit', () => {
  test('renders', () => {
    const json = renderer.create(<Submit />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-transform', 'uppercase')
  })

  test('renders lg', () => {
    const json = renderer.create(<Submit lg />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
