import Box from './Box'

const Image = Box.withComponent('img').extend`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.displayName = 'Image'

export default Image
