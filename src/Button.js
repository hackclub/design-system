import styled, { css } from 'styled-components'
import theme, { cx, hexa } from './theme'
import { space, width, color, fontSize, propTypes } from 'styled-system'
import PropTypes from 'prop-types'

const Button = styled.a`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 1.125;
  appearance: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition} box-shadow;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor};
  border-radius: ${({ theme }) => theme.pill};
  border: 0;
  outline: 0;
  ${space} ${width} ${color} ${fontSize}

  ${props =>
    props.inverted && {
      backgroundColor: cx(props.color),
      color: cx(props.bg)
    }};

  &:hover,
  &:focus {
    box-shadow: 0 2px 6px
      ${props =>
        props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  &:active {
    box-shadow: 0 2px 8px 2px
      ${props =>
        props.inverted ? props.theme.shadowColor : hexa(props.bg, 0.25)};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.25;
      cursor: not-allowed;
    `};

  ${props =>
    props.scale &&
    css`
      transition: ${({ theme }) => theme.transition} all;
      will-change: transform;
      transform: scale(1);
      &:hover,
      &:focus {
        transform: scale(${({ theme }) => theme.scaleFactor});
      }
      ${({ theme }) => theme.mediaQueries.reduceMotion} {
        transform: none;
      }
    `};

  ${props =>
    props.chevronLeft &&
    css`
      &:before {
        content: '«';
        padding-right: 0.25em;
      }
    `};
  ${props =>
    props.chevronRight &&
    css`
      &:after {
        content: '»';
        padding-left: 0.25em;
      }
    `};
`

Button.displayName = 'Button'

Button.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.fontSize,
  ...propTypes.width,
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
  fontSize: 3,
  m: 0,
  px: 3,
  py: 2
}

Button.button = Button.withComponent('button')
Button.input = Button.withComponent('input')

export default Button
