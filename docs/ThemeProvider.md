# ThemeProvider

The ThemeProvider component is a wrapper around the styled-components’ [ThemeProvider][1]

Wrap the root of your application with the `ThemeProvider` component,
which adds the Design System theme to context for use in styled-components
and sets typographic defaults (including, optionally, loading our webfont, Averta).
This should only be included once in your application.

```jsx
<ThemeProvider webfonts>
  <Heading>Hello</Heading>
</ThemeProvider>
```

[1]:	https://www.styled-components.com/docs/advanced#theming
