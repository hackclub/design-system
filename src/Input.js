import React from 'react'
import styled from 'styled-components'
import { fontSize, space, width, color, propTypes } from 'styled-system'
import theme, { filterProps } from './theme'
import PropTypes from 'prop-types'

const chevron = () => {
  const props = `xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'`
  const slate = '%23' + theme.colors.slate.replace('#', '')
  const pathProps = `fill='${slate}' d='M2 0L0 2h4zm0 5L0 3h4z'`
  return `%3Csvg ${props}%3E%3Cpath ${pathProps}/%3E%3C/svg%3E`
}

const Base = props => {
  const next = filterProps(props)
  return <input {...next} />
}

const Input = styled(Base)`
  appearance: none;
  display: block;
  vertical-align: middle;
  max-width: 32rem;
  min-height: 36px;
  line-height: inherit;
  font-family: inherit;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radius};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.smoke};
  transition: ${({ theme }) => theme.transition} box-shadow;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  ::-ms-clear {
    display: none;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.info};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue[2]};
  }

  &[type='select'] {
    background: #fff url("data:image/svg+xml;charset=utf8,${chevron()}") no-repeat right .75rem center;
    background-size: .5rem;
  }

  &[type='textarea'] {
    resize: vertical;
  }

  ${fontSize} ${space} ${width} ${color};
`

Input.displayName = 'Input'

Input.propTypes = {
  id: PropTypes.string,
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

export const InputSelect = Input.withComponent('select')
export const InputTextarea = Input.withComponent('textarea')

export default Input
