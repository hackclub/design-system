import React from 'react'
import renderer from 'react-test-renderer'
import { theme, BackgroundImage } from '..'

const props = {
  src:
    'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  'aria-label': 'Wooden desk with tools and chair'
}

describe('BackgroundImage', () => {
  test('renders', () => {
    const json = renderer.create(<BackgroundImage {...props} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-image', `url(${props.src})`)
  })

  test('renders with height', () => {
    const json = renderer
      .create(<BackgroundImage height="256px" {...props} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '256px')
  })

  test('scale', () => {
    const json = renderer.create(<BackgroundImage scale {...props} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-size',
      `auto ${theme.scaleFactor * 100}%`
    )
    expect(json).toHaveStyleRule(
      'background-size',
      `auto ${(theme.scaleFactor + 1 / 16) * 100}%`,
      { modifier: ':hover' }
    )
  })
})
