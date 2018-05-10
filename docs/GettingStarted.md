# Getting Started

Install the Design System in your application

```sh
yarn add @hackclub/design-system
```

## ThemeProvider

Wrap the root of your application with the `ThemeProvider` component,
which adds the Design System theme to context for use in `styled-components`
and sets typographic defaults (including loading our webfont, Averta).
This should only be included once in your application.

```jsx
import React from 'react'
import { ThemeProvider } from '@hackclub/design-system'

const App = () => (
  <ThemeProvider webfonts>
    <h1>Hello</h1>
  </ThemeProvider>
)
```

## Primitive UI Components

The preferred way of using the design system in a React application is with UI primitives.
With effective use of the UI primitives, you can reduce the need to write custom CSS in your application.

```jsx
import React from 'react'
import { Box, Text } from '@hackclub/design-system'

const SomeView = props => (
  <Box bg="primary" p={3}>
    <Text color="white">Hello</Text>
  </Box>
)
```
