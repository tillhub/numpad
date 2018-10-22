import React from 'react'
import NumPad from './'
import { fireEvent, render, cleanup } from 'react-testing-library'

afterEach(cleanup)

describe('NumPad', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<NumPad />)
    const inputField = getByTestId('input')
    expect(inputField.value).toBe('0')
  })

  it('is functioning as expected', () => {
    const handleChange = jest.fn()
    const { getByText, getByTestId } = render(
      <NumPad handleChange={handleChange} />
    )
    const button7 = getByText('7')
    const decimalSeparator = getByTestId('decimalSeparator')
    const inputField = getByTestId('input')

    expect(button7.textContent).toBe('7')
    fireEvent.click(button7)
    fireEvent.click(button7)
    fireEvent.click(decimalSeparator)
    fireEvent.click(button7)
    expect(inputField.value).toBe('77.7')
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledTimes(4)
  })

  it('is deletes the last numbers been added', () => {
    const { getByText, getByTestId } = render(<NumPad />)
    const button6 = getByText('6')
    const button4 = getByText('4')
    const inputField = getByTestId('input')
    const backspace = getByTestId('backspace')

    fireEvent.click(button4)
    fireEvent.click(button6)
    expect(inputField.value).toBe('46')
    fireEvent.click(backspace)
    expect(inputField.value).toBe('4')
  })

  it('cleans all the numbers', () => {
    const { getByText, getByTestId } = render(<NumPad />)
    const button9 = getByText('9')
    const inputField = getByTestId('input')
    const cleanButton = getByText('C')

    fireEvent.click(button9)
    fireEvent.click(button9)
    expect(inputField.value).toBe('99')
    fireEvent.click(cleanButton)
    expect(inputField.value).toBe('0')
  })

  it('uses the provided decimal seperator', () => {
    const { getByText, getByTestId } = render(<NumPad decimalSeparator="," />)
    const button1 = getByText('1')
    const decimalSeparator = getByTestId('decimalSeparator')
    const button2 = getByText('2')
    const button0 = getByText('0')
    const inputField = getByTestId('input')

    fireEvent.click(button1)
    fireEvent.click(decimalSeparator)
    fireEvent.click(button2)
    fireEvent.click(button0)
    expect(inputField.value).toBe('1,20')
  })

  it('is disabled', () => {
    const { getByText, getByTestId } = render(<NumPad disabled />)
    const button7 = getByText('7')
    const inputField = getByTestId('input')

    fireEvent.click(button7)
    expect(inputField.value).toBe('0')
  })
})
