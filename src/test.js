import React from 'react'
import NumPad from './'
import renderer from 'react-test-renderer'

const props = {
  handleChange: jest.fn()
}

describe('NumPad', () => {
  it('renders NumPad correctly', () => {
    const component = renderer.create(<NumPad {...props} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders NumPad correctly in disabled mode', () => {
    const component = renderer.create(<NumPad {...props} disabled />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls function when a button is clicked', () => {
    const wrapper = mount(<NumPad {...props} />)
    const button7 = wrapper.find('span').at(2)

    expect(props.handleChange).toHaveBeenCalledTimes(0)

    button7.simulate('click')

    expect(toJson(wrapper)).toMatchSnapshot()
    expect(props.handleChange).toHaveBeenCalledTimes(1)
  })
})
