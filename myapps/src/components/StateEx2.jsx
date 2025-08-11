import React, { Component } from "react";

class StateEx2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleAdd = () => {
    this.state = {
      count: this.state.count + 5,
    };
    console.log(this.state);
  };
  handleSub = () => {
    this.state = {
      count: this.state.count - 3,
    };
    console.log(this.state);
  };
  Reset = () => {
    this.state = {
      count: this.state.count = 0,
    };
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h3>StateEx2 - {this.state.count}</h3>
        <button onClick={this.handleAdd}>Add </button>
        <button onClick={this.handleSub}>Sub </button>
        <button onClick={this.Reset}>Reset </button>
      </div>
    );
  }
}

export default StateEx2;
