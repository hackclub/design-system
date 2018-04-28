import React from 'react'
import renderer from 'react-test-renderer'
import { BackgroundImage } from '..'

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer
      .create(<BackgroundImage src="hello.png" aria-label="Hello" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-image', 'url(hello.png)')
  })

  test('renders with height', () => {
    const json = renderer.create(<BackgroundImage height="256px" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '256px')
  })
})
