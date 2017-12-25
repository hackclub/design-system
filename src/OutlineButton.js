import Button from './Button'
import theme from './theme'

const OutlineButton = Button.extend`
  box-shadow: none !important;
  background-color: transparent !important;
  color: ${props => props.theme.colors[props.color]};
  border-width: 2px;
  border-style: solid;
  border-color: currentColor;
`

OutlineButton.displayName = 'OutlineButton'

OutlineButton.defaultProps = {
  theme,
  color: 'primary',
  f: 3,
  m: 0,
  px: 3,
  py: 2
}

export default OutlineButton
