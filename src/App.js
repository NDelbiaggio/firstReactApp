import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Counters from "./components/counters";

import ListProducts from "./components/listProducts";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelte = counterId => {
    let counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;

    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounter={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelte}
            onIncrement={this.handleIncrement}
          />
        </main>
        <ListProducts />
      </React.Fragment>
    );
  }
}

export default App;
