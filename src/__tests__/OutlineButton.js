import React from 'react'
import renderer from 'react-test-renderer'
import { OutlineButton, theme } from '..'

describe('OutlineButton', () => {
  test('renders', () => {
    const json = renderer.create(<OutlineButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-style', 'solid')
    expect(json).toHaveStyleRule('background', 'transparent')
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<OutlineButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('opacity', '0.25')
  })

  test('with custom color', () => {
    const json = renderer.create(<OutlineButton bg="white" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })
})
