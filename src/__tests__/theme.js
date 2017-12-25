import theme, { cx, colors, space, fontSizes, boxShadows } from '../theme'

const aliases = ['sm', 'md', 'lg', 'xl']

describe('theme', () => {
  console.warn = jest.genMockFunction()

  test('exports an object', () => {
    expect(typeof theme).toBe('object')
  })

  test('snapshot', () => {
    expect(theme).toMatchSnapshot()
  })

  test('exports colors', () => {
    expect(typeof colors).toBe('object')
  })

  test('cx works', () => {
    expect(theme.cx('red.5')).toBe(theme.colors.red[5])
    expect(theme.cx('#ff6d00')).toBe('#ff6d00')
  })

  test('scales are objects', () => {
    expect(typeof space).toBe('object')
    expect(typeof fontSizes).toBe('object')
    expect(typeof boxShadows).toBe('object')
  })

  test('breakpoints have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.breakpoints[alias]).toEqual(theme.breakpoints[i])
    )
  })

  test('media queries have aliases', () => {
    aliases.forEach((alias, i) =>
      expect(theme.mediaQueries[alias]).toEqual(theme.mediaQueries[i])
    )
  })
})
