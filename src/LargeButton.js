import PropTypes from 'prop-types'
import Button from './Button'
import theme from './theme'

const LargeButton = Button.extend``

LargeButton.displayName = LargeButton

LargeButton.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  inverted: false,
  f: [2, 3, 4],
  py: 3,
  px: 4
}

export default LargeButton
