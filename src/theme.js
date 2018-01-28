import palx from 'palx'
import dotProp from 'dot-prop'

const red = '#e42d42'
const blue = '#2d9ce4'
export const palette = palx(blue)

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: red,
  accent: palette.indigo[4],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[7],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

export const cx = key =>
  dotProp.has(colors, key) ? dotProp.get(colors, key) : key

const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      }
    })
  )

export const breakpoints = [32, 48, 64, 80]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const font = 'Averta,"Avenir Next","Segoe UI",Roboto,sans-serif'
export const mono = 'SFMono-Regular,"Roboto Mono",Menlo,monospace'

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const regular = 400
export const bold = 700

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = { regular, bold }

// styled-system’s `borderRadius` function can hook into the `radii` object/array
export const radii = ['0px', '4px', '8px', '16px', '9999px']
export const radius = '4px'
export const pill = radii[4]

export const shadowColor = 'rgba(0,0,0,0.125)'
export const boxShadows = [
  `0 1px 4px 0 ${shadowColor}`,
  `0 4px 8px 0 ${shadowColor}`,
  `0 16px 16px 0 ${shadowColor}`,
  `0 24px 32px 0 ${shadowColor}`
]

const theme = {
  breakpoints,
  mediaQueries,
  space,
  mono,
  font,
  fontSizes,
  fontWeights,
  regular,
  bold,
  colors,
  radii,
  radius,
  pill,
  boxShadows,
  shadowColor,
  cx
}

export default theme
