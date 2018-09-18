import React from 'react'
import renderer from 'react-test-renderer'
import { Icon } from '..'

describe('Icon', () => {
  test('renders', () => {
    const json = renderer.create(<Icon glyph="flag" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
