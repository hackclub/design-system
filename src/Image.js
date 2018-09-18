import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'

const Image = styled(Box.withComponent('img'))`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image
