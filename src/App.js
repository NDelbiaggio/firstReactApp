import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import Checkout from "./components/checkout";

import ListProducts from "./components/listProducts";

class App extends Component {
  state = {
    shoppingCard: []
  };

  handleUpdateShoppingCard = (product, counter) => {
    let shoppingCard = [...this.state.shoppingCard];
    let ind = shoppingCard.findIndex(transaction => {
      return transaction.product.id === product.id;
    });

    if (counter === 0) {
      shoppingCard.splice(ind, 1);
    } else if (ind === -1) {
      shoppingCard.push({ product, counter });
    } else {
      shoppingCard[ind].counter = counter;
    }
    this.setState({ shoppingCard });
  };

  getNumberItems() {
    let quantity = 0;
    this.state.shoppingCard.forEach(transaction => {
      quantity += transaction.counter;
    });
    return quantity;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounter={this.getNumberItems()} />
        <Checkout shoppingCard={this.state.shoppingCard} />
        <ListProducts onUpdateShoppingCard={this.handleUpdateShoppingCard} />
      </React.Fragment>
    );
  }
}

export default App;
