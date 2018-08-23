import Box from './Box'
import PropTypes from 'prop-types'

const Image = Box.withComponent('img').extend`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image
