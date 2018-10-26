/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { IconButton } from '..'

describe('IconButton', () => {
  test('renders', () => {
    const json = renderer.create(<IconButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with circle prop', () => {
    const json = renderer.create(<IconButton circle />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-radius', '9999px')
    expect(json).toHaveStyleRule('padding', '12px')
  })

  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(<IconButton onClick={handleClick} />)
    wrapper.simulate('click')
    expect(handleClick).toBeCalled()
  })
})
