import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'
import { cx } from './theme'

const Divider = styled(Box.withComponent('hr'))`
  height: ${props => props.height};
  border: 0;
  border-radius: ${({ theme }) => theme.pill};
  background-color: ${props =>
    cx(props.color || props.borderColor || props.bg || 'smoke')};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
  height: '3px',
  mx: 0
}

Divider.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string
}

export default Divider
