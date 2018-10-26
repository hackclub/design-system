import styled from 'styled-components'
import Box from './Box'
import theme from './theme'
import PropTypes from 'prop-types'

const Container = styled(Box)`
  max-width: ${props => props.maxWidth}rem;
`

Container.displayName = 'Container'

Container.propTypes = {
  maxWidth: PropTypes.number
}

Container.defaultProps = {
  maxWidth: 72,
  mx: 'auto'
}

export default Container
