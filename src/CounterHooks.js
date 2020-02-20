import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    setCounter(prevState => prevState - 1)
  }

  const increment = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <>
      <button id="decrement-button" onClick={decrement}>
        -
      </button>
      <span id="counter-display">{counter}</span>
      <button id="increment-button" onClick={increment}>
        +
      </button>
    </>
  )
}

export default Counter
