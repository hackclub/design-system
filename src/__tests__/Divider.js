import React from 'react'
import renderer from 'react-test-renderer'
import { Divider, theme } from '..'

describe('Divider', () => {
  test('renders', () => {
    const json = renderer.create(<Divider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('color prop sets background-color', () => {
    const json = renderer.create(<Divider color="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
  })

  test('borderColor prop sets background-color', () => {
    const json = renderer.create(<Divider borderColor="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
  })

  test('bg prop sets background-color', () => {
    const json = renderer.create(<Divider bg="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
  })

  test('height prop', () => {
    const json = renderer.create(<Divider height="4px" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '4px')
  })
})
