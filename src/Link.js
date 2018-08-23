import Text from './Text'
import PropTypes from 'prop-types'
import theme from './theme'

const Link = Text.withComponent('a').extend`
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`

Link.displayName = 'Link'

Link.propTypes = {
  href: PropTypes.string,
  underline: PropTypes.bool
}

Link.defaultProps = {
  theme,
  color: 'info'
}

export default Link
