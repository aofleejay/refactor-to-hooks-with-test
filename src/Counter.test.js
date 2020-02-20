import React from 'react'
import { shallow } from 'enzyme'
import { render, fireEvent } from '@testing-library/react'
import CounterClass from './CounterClass'
import CounterHooks from './CounterHooks'

describe('test behavior', () => {
  test('test counter component that use class component', () => {
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

  test('test counter component that use functional component with hooks', () => {
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
})

describe.skip('test implementation detail (should not do this)', () => {
  test('test counter component that use class component', () => {
    const wrapper = shallow(<CounterClass />)
    const incrementButton = wrapper.find('#increment-button')
    const decrementButton = wrapper.find('#decrement-button')

    decrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    decrementButton.simulate('click')

    expect(wrapper.state().counter).toBe(1)
  })

  test('test counter component that use functional component with hooks', () => {
    const wrapper = shallow(<CounterHooks />)
    const incrementButton = wrapper.find('#increment-button')
    const decrementButton = wrapper.find('#decrement-button')

    decrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    incrementButton.simulate('click')
    decrementButton.simulate('click')

    expect(wrapper.state().counter).toBe(1)
  })
})
