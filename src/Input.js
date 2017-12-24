import styled from 'styled-components'
import { fontSize, space, width, color, propTypes } from 'styled-system'
import theme from './theme'
import PropTypes from 'prop-types'

const Input = styled.input`
  appearance: none;
  display: block;
  vertical-align: middle;
  max-width: 32rem;
  min-height: 36px;
  line-height: inherit;
  font-family: inherit;
  background-color: transparent;
  border-radius: ${props => props.theme.radius};
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.smoke};
  transition: 0.125s box-shadow ease-out;

  ::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  ::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.info};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.blue[2]};
  }

  ${fontSize} ${space} ${width} ${color};
`

Input.displayName = 'Input'

Input.propTypes = {
  id: PropTypes.string.isRequired,
  ...propTypes.fontSize,
  ...propTypes.space,
  ...propTypes.width,
  ...propTypes.color
}

Input.defaultProps = {
  theme,
  w: 1,
  m: 0,
  py: 1,
  px: 2,
  fontSize: 2,
  color: 'inherit',
  bg: 'transparent'
}

export default Input
