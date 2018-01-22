import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import theme from './theme'

const Button = Box.withComponent('a').extend`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: ${props => props.theme.bold};
  line-height: 1.125;
  appearance: none;
  cursor: pointer;
  transition: .125s box-shadow ease-out;
  box-shadow: 0 2px 12px ${props => props.theme.shadowColor};
  border-radius: ${props => props.theme.pill};
  border-width: 0;
  border-style: solid;

  ${props =>
    props.inverted
      ? {
          backgroundColor: props.theme.colors[props.color],
          color: props.theme.colors[props.bg]
        }
      : null};

  &:hover, &:focus {
    outline: 0;
    box-shadow: 0 2px 12px 2px ${props =>
      !props.inverted && props.bg === 'primary'
        ? 'rgba(228,45,66,.25)'
        : props.theme.shadowColor};
  }

  &:active {
    outline: 0;
    box-shadow: 0 4px 16px 2px ${props =>
      !props.inverted && props.bg === 'primary'
        ? 'rgba(228,45,66,.375)'
        : props.theme.shadowColor};
  }

  ${props => (props.disabled ? 'opacity: 0.25' : null)};
`

Button.displayName = 'Button'

Button.propTypes = {
  inverted: PropTypes.bool
}

Button.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  inverted: false,
  f: 3,
  m: 0,
  px: 3,
  py: 2
}

Button.button = Button.withComponent('button')
Button.input = Button.withComponent('input')

export default Button
