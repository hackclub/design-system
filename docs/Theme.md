# Theme

The theme style constants should be used whenever low-level access to font
sizes, margin, padding, media queries, and colors are needed.

```js
import { theme } from '@hackclub/design-system'

// or
import { colors, mediaQueries, fontSizes, space } from '@hackclub/design-system'
```

## Colors

```js
import { colors } from '@hackclub/design-system'

colors.primary // '#e42d42'
```

## Font Sizes

```js
import { fontSizes } from '@hackclub/design-system'

fontSizes[2] // 16
```

The theme includes a typographic scale as the `fontSizes` array.
Use these values whenever declaring a `font-size` in CSS.

## Spacing Scale

The `space` array should be used whenever declaring margin or padding values.

```js
import { space } from '@hackclub/design-system'

space[0] // 0
space[1] // 4
space[2] // 8
space[3] // 16
space[4] // 32
space[5] // 64
space[6] // 128
```

## Media Queries

The `mediaQueries` array can be used to add styles targeted for different
screen sizes. The design system is built for mobile-first design, so all media
queries use min-width.

```js
import { mediaQueries } from '@hackclub/design-system'

mediaQueries[0] // @media screen and (min-width:32em)
mediaQueries[1] // @media screen and (min-width:48em)
mediaQueries[2] // @media screen and (min-width:64em)
mediaQueries[3] // @media screen and (min-width:80em)

mediaQueries.sm // alias for mediaQueries[0]
mediaQueries.md // alias for mediaQueries[1]
mediaQueries.lg // alias for mediaQueries[2]
mediaQueries.xl // alias for mediaQueries[3]
```
