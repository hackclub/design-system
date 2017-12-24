import React from 'react'
import renderer from 'react-test-renderer'
import { Container } from '..'

describe('Container', () => {
  test('renders with default theme max-width', () => {
    const json = renderer.create(<Container />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with maxWidth', () => {
    const json = renderer.create(<Container maxWidth={32} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('max-width', '32rem')
  })
})
