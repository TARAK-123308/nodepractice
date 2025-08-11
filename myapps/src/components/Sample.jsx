import { Component } from "react";

class Sample extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  Handleadd = () => {
    this.setState ({
      count: this.state.count + 5,
    });
  };
  HandleSub = () => {
    this.setState ({
      count: this.state.count - 1,
    });
  };
  Reset = () => {
    this.setState ({
      count: 0,
    });
  };
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button type="button" onClick={this.Handleadd}>
          Add
        </button>
        <button type="button" onClick={this.HandleSub}>
          Sub
        </button>
        <button type="button" onClick={this.Reset}>
          Reset
        </button>
      </div>
    );
  }
}
export default Sample;
