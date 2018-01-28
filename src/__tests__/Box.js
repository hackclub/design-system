import React from 'react'
import renderer from 'react-test-renderer'
import { Box, theme } from '..'

describe('Box', () => {
  test('renders', () => {
    const json = renderer.create(<Box />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width prop sets width', () => {
    const json = renderer.create(<Box width={1 / 2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = renderer.create(<Box m={1} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[1] + 'px')
  })

  test('p prop sets padding', () => {
    const json = renderer.create(<Box p={1} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[1] + 'px')
  })

  test('color prop sets color', () => {
    const json = renderer.create(<Box color="warning" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.warning)
  })

  test('bg prop sets background color', () => {
    const json = renderer.create(<Box bg="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.accent)
  })

  test('bg prop sets custom background color', () => {
    const json = renderer.create(<Box bg="#ff6d00" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', '#ff6d00')
  })
})
