import React from 'react'
import renderer from 'react-test-renderer'
import { Slider, theme } from '..'

describe('Slider', () => {
  test('renders', () => {
    const json = renderer.create(<Slider id="renders" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
