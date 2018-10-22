import React from 'react'
import NumPad from './'
import { mount } from 'enzyme'
import { fireEvent, render } from 'react-testing-library'

const props = {
  handleChange: jest.fn()
}

describe('NumPad', () => {
  it('Numpad is functioning as expected', () => {
    const { getByText, getByTestId } = render(<NumPad {...props} />)
    const button7 = getByText('7')
    expect(button7.textContent).toBe('7')
    fireEvent.click(button7)
    const inputField = getByTestId('input')
    expect(inputField.value).toBe('7')
  })
})
