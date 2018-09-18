import styled from 'styled-components'
import LargeButton from './LargeButton'
import theme, { cx } from './theme'

const OutlineButton = LargeButton.extend`
  background: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => cx(props.bg)};
  box-shadow: none;
  color: ${props => cx(props.bg)};
  &:focus:enabled,
  &:hover:enabled {
    background: ${props => cx(props.bg)};
    color: ${props => cx(props.color)};
    transition: ${({ theme }) => theme.transition} background,
      ${({ theme }) => theme.transition} color;
  }
`

OutlineButton.displayName = 'OutlineButton'

OutlineButton.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  fontSize: 3,
  py: theme.space[3] - 2,
  px: theme.space[4] - 2,
  m: 0
}

export default OutlineButton
