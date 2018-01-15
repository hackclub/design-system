import React from 'react'
import renderer from 'react-test-renderer'
import { Avatar } from '..'

describe('Avatar', () => {
  test('renders', () => {
    const json = renderer
      .create(<Avatar src="https://hackclub.com/team/zach.png" size={64} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '64px')
  })
})
