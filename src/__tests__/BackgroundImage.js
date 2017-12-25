import React from 'react'
import renderer from 'react-test-renderer'
import { BackgroundImage } from '..'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer.create(<BackgroundImage />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with image', () => {
    const json = renderer.create(<BackgroundImage image="hello.png" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-image', 'url(hello.png)')
  })

  test('renders with height', () => {
    const json = renderer.create(<BackgroundImage height="256px" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '256px')
  })
})
