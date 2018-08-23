import React from 'react'
import renderer from 'react-test-renderer'
import { MDIcon } from '..'
import icons from '../../icons.js'

const keys = Object.keys(icons)

describe('MDIcon', () => {
  keys.forEach(name => {
    test(`${name} renders`, () => {
      const icon = renderer.create(<MDIcon name={name} />).toJSON()
      expect(icon).toMatchSnapshot()
    })
  })

  test('returns false for non-existing icons', () => {
    // Mock out console.error since we’re expecting a propType warning
    console.error = jest.genMockFunction()
    const icon = renderer.create(<MDIcon name="yayyay" />).toJSON()

    // We expect one propType warning.
    expect(console.error.mock.calls.length).toBe(1)
    expect(icon).toBe(null)
    jest.mock
  })
})
