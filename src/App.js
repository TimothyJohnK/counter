import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrementState() {
    this.setState({ count: this.state.count - 1 });
  }

  incrementState() {
    this.setState({ count: this.state.count + 1 });
  }

  // onCounterClick(type) {
  //   this.setState(
  //     type === 'decrement'
  //       ? this.setState({ count: this.state.count - 1 })
  //       : this.setState({ count: this.state.count + 1 })
  //   );
  // }

  render() {
    return (
      <div className="App">
        <div className="score"> Score: {this.state.count} </div>
        <div className="counters">
          <div
            className="counter_button decrement"
            onClick={this.decrementState.bind(this)}
          >
            Decrement
          </div>
          <div
            className="counter_button increment"
            onClick={this.incrementState.bind(this)}
          >
            Increment
          </div>
        </div>
      </div>
    );
  }
}

export default App;
