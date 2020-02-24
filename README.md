We know that we can use state in functional component by using React Hooks. That means if we want to refactor code from class component to functional component the test should not break right?

So if our test look like this i think it's okay because the test doesn't know about React API.

```jsx
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
```

But if we write test like this. When we change from class component to functional component with hooks the test will break because we test React API (`expect(wrapper.state().counter).toBe(1)`).

```jsx
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
```
