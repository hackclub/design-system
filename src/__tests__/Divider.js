import React from 'react'
import renderer from 'react-test-renderer'
import { Divider, theme } from '..'

describe('Divider', () => {
  test('renders', () => {
    const json = renderer.create(<Divider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('borderColor prop sets borderColor', () => {
    const json = renderer.create(<Divider borderColor="accent" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', 'accent')
  })
})
