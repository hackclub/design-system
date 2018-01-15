import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme } from '..'
import { Base } from '../ThemeProvider'

describe('ThemeProvider', () => {
  test('renders nothing', () => {
    const json = renderer.create(
      <ThemeProvider>
        <div />
        <div />
        <div />
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})
