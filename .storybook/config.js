import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider, Box } from '../src'

addDecorator(story => (
  <ThemeProvider webfonts>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
