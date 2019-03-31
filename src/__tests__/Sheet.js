import React from 'react'
import renderer from 'react-test-renderer'
import { Sheet } from '..'

describe('Sheet', () => {
  test('renders', () => {
    const json = renderer.create(<Sheet />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', 'rgba(255,255,255,0.875)')
  })
})
