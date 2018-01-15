import React from 'react'
import renderer from 'react-test-renderer'
import { Avatar } from '..'

describe('Avatar', () => {
  test('renders', () => {
    const json = renderer
      .create(<Avatar src="https://hackclub.com/team/zach.png" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '48px')
  })

  test('renders string width', () => {
    const json = renderer
      .create(<Avatar src="https://hackclub.com/team/zach.png" size="10vw" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '10vw')
  })
})
