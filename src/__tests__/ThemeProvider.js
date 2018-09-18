import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, theme } from '..'
import { Base } from '../ThemeProvider'
import styled from 'styled-components'

const Content = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`

describe('ThemeProvider', () => {
  test('renders content with theme', () => {
    const json = renderer.create(
      <ThemeProvider>
        <Content>Hello!</Content>
      </ThemeProvider>
    )
    expect(json).toMatchSnapshot()
  })
})
