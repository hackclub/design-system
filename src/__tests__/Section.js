import React from 'react'
import renderer from 'react-test-renderer'
import { Section } from '..'

describe('Section', () => {
  test('renders', () => {
    const json = renderer.create(<Section />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
