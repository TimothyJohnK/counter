import React, { Component } from 'react';
import './App.css';

// const EXPJAYRAY = [
//   {
//     ob1: 'thing1',
//     ob2: 'thing2'
//   },
//   {
//     ob1: 'thing3',
//     ob2: 'thing4'
//   }
// ];

// const ListItem = props => (
//   <div style={{ color: 'red' }}> {props.children} </div>
// );

// const LevelOne = ({ handleChange }) => (
//   <form>
//     <label>
//       How much more or less?{' '}
//       <input type="number" onChange={() => this.handleChange} />
//     </label>
//   </form>
// );

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handleChange(e) {
//     this.setState({ count: e.target.value });
//   }

//   handleClick(type) {
//     this.setState(
//       type === 'decrement'
//         ? this.setState(() => ({ count: this.state.count - 1 }))
//         : this.setState(() => ({ count: this.state.count + 1 }))
//     );
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="score"> Score: {this.state.count} </div>
//         <LevelOne onChange={this.handleChange} />
//         <div className="counters">
//           <div
//             className="counter_button decrement"
//             onClick={this.handleClick.bind(this, 'decrement')}
//           >
//             Decrement
//           </div>
//           <div
//             className="counter_button increment"
//             onClick={this.handleClick.bind(this, 'increment')}
//           >
//             Increment
//           </div>
//           <ListItem>
//             <ul>
//               <li>Red test props</li>
//             </ul>
//           </ListItem>
//         </div>
//       </div>
//     );
//   }
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
