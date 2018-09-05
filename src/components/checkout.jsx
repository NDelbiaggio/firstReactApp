import React, { Component } from "react";

class Checkout extends Component {
  state = {};

  getTotalPrice() {
    let total = 0;
    this.props.shoppingCard.forEach(trans => {
      total += this.getPrice(trans.product.price, trans.counter);
    });
    return Math.round(total * 100) / 100;
  }

  getPrice(price, quantity) {
    return Math.round(price * quantity * 100) / 100;
  }

  render() {
    const { shoppingCard } = this.props;
    let inc = 0;

    return (
      shoppingCard.length > 0 && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCard.map(transaction => {
              const { product, counter } = transaction;
              inc++;
              return (
                <tr key={inc}>
                  <th key={"id"} scope="row">
                    {inc}
                  </th>
                  <td key={"name"}>{product.name}</td>
                  <td key={"quantity"}>{counter}</td>
                  <td key={"price"}>
                    {this.getPrice(product.price, counter)} €
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Total Price</td>
              <td />
              <td />
              <td>{this.getTotalPrice()}€</td>
            </tr>
          </tfoot>
        </table>
      )
    );
  }
}

export default Checkout;
