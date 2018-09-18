import styled from 'styled-components'
import Text from './Text'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import theme from './theme'

const Link = Text.withComponent('a').extend`
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};

  ${props =>
    props.hoverline &&
    css`
      &:focus,
      &:hover {
        text-decoration: underline;
      }
    `};

  &:before,
  &:after {
    text-decoration: none !important;
    display: inline-block;
  }
  ${props =>
    props.chevronLeft &&
    css`
      &:before {
        content: '‹';
        padding-right: 0.25em;
      }
    `};
  ${props =>
    props.chevronRight &&
    css`
      &:after {
        content: '›';
        padding-left: 0.25em;
      }
    `};
`

Link.displayName = 'Link'

Link.propTypes = {
  /** you know, where the link goes */
  href: PropTypes.string,
  /** enable text-decoration: underline */
  underline: PropTypes.bool,
  /** enable text-decoration: underline on hover*/
  hoverline: PropTypes.bool,
  /** add left text arrows */
  chevronLeft: PropTypes.bool,
  /** add right text arrows */
  chevronRight: PropTypes.bool
}

Link.defaultProps = {
  theme,
  color: 'info'
}

export default Link
