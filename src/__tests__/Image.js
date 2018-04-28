import React from 'react'
import renderer from 'react-test-renderer'
import { Image } from '..'

const imageSrc = 'https://hackclub.com/lah_1.jpg'

describe('Image', () => {
  test('renders', () => {
    const json = renderer
      .create(<Image src={imageSrc} alt="Smiling students at a hackathon" />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
