import React, { Component } from 'react'

class Counter extends Component {
  state = { counter: 0 }

  decrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
  }

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  render() {
    return (
      <>
        <button id="decrement-button" onClick={this.decrement}>
          -
        </button>
        <span id="counter-display">{this.state.counter}</span>
        <button id="increment-button" onClick={this.increment}>
          +
        </button>
      </>
    )
  }
}

export default Counter
