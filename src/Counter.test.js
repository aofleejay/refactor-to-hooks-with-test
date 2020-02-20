import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CounterClass from './CounterClass'
import CounterHooks from './CounterHooks'

test('test class component counter', () => {
  const { getByText } = render(<CounterClass />)
  const incrementButton = getByText('+')
  const decrementButton = getByText('-')

  fireEvent.click(decrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(decrementButton)

  expect(getByText('1')).toBeInTheDocument()
})

test('test functional component with hooks', () => {
  const { getByText } = render(<CounterHooks />)
  const incrementButton = getByText('+')
  const decrementButton = getByText('-')

  fireEvent.click(decrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(incrementButton)
  fireEvent.click(decrementButton)

  expect(getByText('1')).toBeInTheDocument()
})
