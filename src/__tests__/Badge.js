import React from 'react'
import renderer from 'react-test-renderer'
import { Badge, theme } from '..'

describe('Badge', () => {
  test('renders', () => {
    const json = renderer.create(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('accepts custom bg and color', () => {
    const json = renderer.create(<Badge bg="white" color="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.accent)
  })
})
