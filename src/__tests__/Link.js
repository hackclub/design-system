import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from '..'

describe('Link', () => {
  test('renders', () => {
    const json = renderer.create(<Link>Hello</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders underline', () => {
    const json = renderer.create(<Link underline>Underline</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-decoration', 'underline')
  })

  test('renders hoverline', () => {
    const json = renderer.create(<Link hoverline>Hoverline</Link>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('text-decoration', 'none')
    expect(json).toHaveStyleRule('text-decoration', 'underline', {
      modifier: ':hover'
    })
  })
})
