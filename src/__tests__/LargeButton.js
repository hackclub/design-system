import React from 'react'
import renderer from 'react-test-renderer'
import { LargeButton, theme } from '..'

describe('LargeButton', () => {
  test('renders', () => {
    const json = renderer.create(<LargeButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('larger', () => {
    const json = renderer.create(<LargeButton bg="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
    expect(json).toHaveStyleRule('color', theme.colors.white)
    expect(json).toHaveStyleRule('padding-left', theme.space[4] + 'px')
  })
})
