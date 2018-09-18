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
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('inverted', () => {
    const json = renderer.create(<Button bg="accent" inverted />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.accent)
  })

  test('scale', () => {
    const json = renderer.create(<Button scale />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('will-change', 'transform')
    expect(json).toHaveStyleRule('transform', 'scale(1)')
    expect(json).toHaveStyleRule('transform', `scale(${theme.scaleFactor})`, {
      modifier: ':hover'
    })
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<Button disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('opacity', '0.25')
    expect(json).toHaveStyleRule('cursor', 'not-allowed')
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<Button bg="success" inverted />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.success)
    expect(json).toHaveStyleRule(
      'box-shadow',
      `0 2px 6px ${theme.shadowColor}`,
      { modifier: ':hover' }
    )
  })

  test('left chevron', () => {
    const json = renderer.create(<Button chevronLeft />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('content', `'«'`, { modifier: ':before' })
  })

  test('right chevron', () => {
    const json = renderer.create(<Button chevronRight />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('content', `'»'`, { modifier: ':after' })
  })
})
