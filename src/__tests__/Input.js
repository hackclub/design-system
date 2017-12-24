import React from 'react'
import renderer from 'react-test-renderer'
import { Input, theme } from '..'

describe('Input', () => {
  test('renders', () => {
    const json = renderer.create(<Input id="renders" />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom spacing', () => {
    const json = renderer.create(<Input p={4} m={4} id="space" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[4] + 'px')
    expect(json).toHaveStyleRule('margin', theme.space[4] + 'px')
  })

  test('renders with custom fontSize', () => {
    const json = renderer.create(<Input fontSize={4} id="fontSize" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', theme.fontSizes[4] + 'px')
  })
})
