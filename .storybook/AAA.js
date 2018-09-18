import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Flex, Heading, Text, Link, Button, Avatar } from '../src'

const List = Box.withComponent('ul')
const Item = Text.withComponent('li')
const Code = Text.withComponent('pre')

const Flag = Link.extend`
  display: inline-block;
  background: url(//hackclub.com/orpheus_flag.svg) no-repeat;
  background-position: top center;
  width: 8rem;
  height: 3rem;
  z-index: 0;
  margin-top: -1rem;
`

storiesOf('👋 Welcome!', module).add('About the project', () => (
  <Fragment>
    <Flag href="https://hackclub.com" />
    <Heading.h1 f={5}>Welcome!</Heading.h1>
    <Text f={3} my={2}>
      This is{' '}
      <Link href="https://hackclub.com" underline children="Hack Club" />
      ’s Design System.
    </Text>
    <Text>It’s a collection of React components designed to:</Text>
    <List>
      <Item>Speed up design and development velocity</Item>
      <Item>
        Help create consistent, beautiful, and usable UI in our various websites
      </Item>
      <Item>
        Promote best practices for accessibility and responsive web design
      </Item>
    </List>
    <Text>We hope to accomplish these goals by:</Text>
    <List>
      <Item>Reducing the number of decisions needed when iterating on UI</Item>
      <Item>Reducing the amount of code duplication in our apps</Item>
      <Item>Serving as the standard for hackclub.com’s visual language</Item>
      <Item>
        Providing easy-to-use and extensible components for anyone to consume
      </Item>
    </List>
    <Code bg="snow" p={3} my={3}>
      yarn add @hackclub/design-system
    </Code>
    <Flex align="center" wrap>
      <Button
        href="https://github.com/hackclub/design-system"
        mr={2}
        children="GitHub"
      />
      <Button
        href="https://www.npmjs.com/package/@hackclub/design-system"
        inverted
        children="npm"
      />
    </Flex>
    <Flex align="center" mt={4}>
      <Avatar src="https://hackclub.com/team/lachlan.jpg" size={48} mr={2} />
      <Text>- @lachlanjc</Text>
    </Flex>
  </Fragment>
))
