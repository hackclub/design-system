import React from 'react'
import renderer from 'react-test-renderer'
import { Module } from '..'

describe('Module', () => {
  test('it renders', () => {
    const json = renderer
      .create(<Module icon="star" heading="Hello" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
