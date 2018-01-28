import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Icon, Flex, Box, Heading, Text } from '../src'
import icons from '../icons.js'

const Grid = Box.extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, 96px);
  grid-gap: 1rem;
`

storiesOf('Icon', module)
  .add(
    'Icon component',
    withInfo({
      inline: true,
      text: 'Google’s Material Design icons as stylable components.'
    })(() => <Icon color="primary" size={48} m={2} name="flag" />)
  )
  .add('All icons', () => (
    <Box p={3} m={-3} color="white" bg="blue.5">
      <Heading.h1 f={[4, 5]} mb={3}>
        All Icons
      </Heading.h1>
      <Grid>
        {Object.keys(icons).map(name => (
          <Box key={name}>
            <Icon name={name} size={48} />
            <Text m={0} fontSize={0}>
              {name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  ))
  .add('Color', () => (
    <Flex align="center">
      <Icon color="red.5" size={48} m={2} name="favorite" />
      <Icon color="blue.5" size={48} m={2} name="build" />
      <Icon color="green.5" size={48} m={2} name="check_box" />
    </Flex>
  ))
