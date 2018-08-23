import React from 'react'
import renderer from 'react-test-renderer'
import { Loading } from '..'

describe('Loading', () => {
  test('renders', () => {
    const json = renderer.create(<Loading />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
