import React from 'react'
import renderer from 'react-test-renderer'
import { Button, theme } from '..'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('custom bg', () => {
    const json = renderer.create(<Button bg="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
  })

  test('inverted', () => {
    const json = renderer.create(<Button bg="accent" inverted />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.accent)
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<Button disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('opacity', '0.25')
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<Button bg="success" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.success)
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 2px 12px 2px ${theme.shadowColor}`,
      {
        modifier: ':hover'
      }
    )
  })
})
