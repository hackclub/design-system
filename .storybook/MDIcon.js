import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { MDIcon, Flex, Box, Heading, Text } from '../src'
import icons from '../icons.js'

const Grid = Box.extend`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  grid-gap: 1rem;
  word-break: break-word;
  font-family: ${props => props.theme.mono};
`

storiesOf('MDIcon', module)
  .add(
    'MDIcon component',
    withInfo({
      inline: true,
      text: 'Google’s Material Design icons as stylable components.'
    })(() => <MDIcon color="primary" size={48} m={2} name="flag" />)
  )
  .add('All icons', () => (
    <Box p={3} m={-3} color="white" bg="black" align="center">
      <Heading.h1 f={[4, 5, 6]} mb={3}>
        All MDIcons
      </Heading.h1>
      <Grid>
        {Object.keys(icons).map(name => (
          <Box key={name}>
            <MDIcon name={name} size={48} />
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
      <MDIcon color="red.5" size={48} m={2} name="favorite" />
      <MDIcon color="blue.5" size={48} m={2} name="build" />
      <MDIcon color="green.5" size={48} m={2} name="check_box" />
    </Flex>
  ))
