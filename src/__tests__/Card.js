import React from 'react'
import renderer from 'react-test-renderer'
import { Card, theme } from '..'

describe('Card', () => {
  test('renders small box shadow', () => {
    const json = renderer.create(<Card boxShadowSize="sm" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.boxShadows[0])
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders lg shadow', () => {
    const json = renderer.create(<Card boxShadowSize="lg" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.boxShadows[2])
  })

  test('renders with 1px border', () => {
    const json = renderer.create(<Card borderWidth={1} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.smoke}`)
  })
})
