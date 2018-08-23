import React from 'react'
import renderer from 'react-test-renderer'
import { LargeButton, theme } from '..'

describe('LargeButton', () => {
  test('renders', () => {
    const json = renderer.create(<LargeButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('inverted', () => {
    const json = renderer.create(<LargeButton inverted />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 2px 12px ${theme.shadowColor}`
    )
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 2px 12px 2px ${theme.shadowColor}`,
      {
        modifier: ':hover'
      }
    )
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 4px 16px 2px ${theme.shadowColor}`,
      {
        modifier: ':active'
      }
    )
  })

  test('larger', () => {
    const json = renderer.create(<LargeButton bg="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
    expect(json).toHaveStyleRule('color', theme.colors.white)
    expect(json).toHaveStyleRule('padding-left', theme.space[4] + 'px')
  })
})
