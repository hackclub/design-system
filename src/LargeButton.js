import styled from 'styled-components'
import Button from './Button'
import theme, { hexa } from './theme'

const LargeButton = styled(Button)`
  text-transform: uppercase;
  box-shadow: 0 2px 12px ${({ theme }) => theme.shadowColor};

  &:hover,
  &:focus {
    box-shadow: 0 2px 12px 2px
      ${props =>
        props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  &:active {
    box-shadow: 0 4px 16px 2px
      ${props =>
        props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }
`

LargeButton.displayName = 'LargeButton'

LargeButton.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  fontSize: 3,
  m: 0,
  py: 3,
  px: 4
}

LargeButton.button = LargeButton.withComponent('button')
LargeButton.input = LargeButton.withComponent('input')

export default LargeButton
