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
      <div onClick={decrement}>-</div>
      <span>{counter}</span>
      <div onClick={increment}>+</div>
    </>
  )
}

export default Counter
