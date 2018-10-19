import React from 'react'
import NumPad from './'
import { mount } from 'enzyme'

const props = {
  handleChange: jest.fn()
}

describe('NumPad', () => {
  it('renders NumPad correctly', () => {
    const component = mount(<NumPad {...props} />)
    expect(component).toHaveLength(1)
  })
})
