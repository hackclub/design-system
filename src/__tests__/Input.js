import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Input } from '..'

describe('Input', () => {
  test('it renders', () => {
    const json = renderer.create(<Input id="renders" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = renderer.create(<Input color="red" id="color" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = renderer.create(<Input p={4} m={4} id="space" />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = renderer.create(<Input fontSize={4} id="fontSize" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
