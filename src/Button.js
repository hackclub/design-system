import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'
import theme, { cx, hexa } from './theme'
import { css } from 'styled-components'

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
  transition: ${props => props.theme.transition} box-shadow;
  box-shadow: 0 2px 4px ${props => props.theme.shadowColor};
  border-radius: ${props => props.theme.pill};
  border-width: 0;
  border-style: solid;

  ${props =>
    props.inverted && {
      backgroundColor: cx(props.color),
      color: cx(props.bg)
    }};

  &:hover, &:focus {
    outline: 0;
    box-shadow: 0 2px 6px ${props =>
      props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  &:active {
    outline: 0;
    box-shadow: 0 2px 8px 2px ${props =>
      props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  ${props => props.disabled && { opacity: 0.25, cursor: 'not-allowed' }};

  ${props =>
    props.scale &&
    css`
      transition: ${props => props.theme.transition} all;
      will-change: transform;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(${props => props.theme.scaleFactor});
      }
      ${props => props.theme.mediaQueries.reduceMotion} {
        transform: none !important;
      }
    `};

  ${props =>
    props.chevronLeft &&
    css`
      &:before {
        content: '« ';
      }
    `};
  ${props =>
    props.chevronRight &&
    css`
      &:after {
        content: ' »';
      }
    `};
`

Button.displayName = 'Button'

Button.propTypes = {
  /** flip colors */
  inverted: PropTypes.bool,
  /** add hover/focus animation */
  scale: PropTypes.bool,
  /** add left text arrows */
  chevronLeft: PropTypes.bool,
  /** add right text arrows */
  chevronRight: PropTypes.bool
}

Button.defaultProps = {
  theme,
  bg: 'primary',
  color: 'white',
  f: 3,
  m: 0,
  px: 3,
  py: 2
}

Button.button = Button.withComponent('button')
Button.input = Button.withComponent('input')

export default Button
