import React from 'react'
import renderer from 'react-test-renderer'
import { Card, theme } from '..'

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = renderer.create(<Card boxShadowSize="sm" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.boxShadows[0])
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.smoke}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })
})
