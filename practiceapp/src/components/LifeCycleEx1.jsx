import React, { Component } from "react";

export default class LifeCycleEx1 extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      list: [],
      loading: true,
    };
    console.log("1. Constructor Method called");
  }
  handleAdd = () => {
    this.setState(prevState => ({ count: (prevState.count += 1) }));
  };
  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Some Error at fetch");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({
          list: data,
          loading: false,
        });
        console.log(this.state.list, count);
      })
      .catch((err) => {
        console.log("My Error", err.message);
      });
  };
  componentDidMount = () => {
    this.fetchData();
    console.log("3. Component just Mounted in DOM");
  };
  componentDidUpdate = () => {
    console.log("4. Component Updated now");
  };
  componentWillUnmount = () => {
    console.log("5. Component will Unmounted from DOM");
  };
  render() {
    console.log("2. Render Method called");

    if (this.state.loading) {
      return (
        <>
          <h1>Loading.....</h1>
        </>
      );
    }
    return (
      <div className="border-1 p-1 rounded-xl">
        <h2>
          Class Component{" "}
          <span className="bg-teal-500 px-3 py-1 rounded-lg">
            {this.state.count}
          </span>{" "}
        </h2>
        <button onClick={this.handleAdd}className="bg-sky-300 px-3 py-1 rounded-lg"> Add</button>
        <ul>
          {this.state.list &&
            this.state.list.map((item, index) => (
              <li key={index}>
                <span>{item.id}</span> <span>{item.title}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
