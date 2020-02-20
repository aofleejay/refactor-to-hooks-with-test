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
        <div onClick={this.decrement}>-</div>
        <span>{this.state.counter}</span>
        <div onClick={this.increment}>+</div>
      </>
    )
  }
}

export default Counter
