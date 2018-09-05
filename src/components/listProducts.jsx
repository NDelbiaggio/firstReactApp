import React, { Component } from "react";

import ProductCard from "./productCard";
import getProducts from "../services/productsService";

class ListProducts extends Component {
  componentDidMount() {
    getProducts().then(products => {
      this.setState({ products });
    });
  }

  state = {
    products: []
  };

  getProductShoppingCardCoutner(product) {
    let trans = this.props.shoppingCard.find(trans => {
      return trans.product.id === product.id;
    });

    return trans ? trans.counter : 0;
  }

  render() {
    const { onUpdateShoppingCard } = this.props;

    return (
      <div
        className="container "
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <div className="row row-eq-height justify-content-center">
          {this.state.products.map(product => {
            return (
              <div
                key={product.id}
                className="col-12 col-md-6 col-lg-4"
                style={{ marginBottom: "20px" }}
              >
                <ProductCard
                  onUpdateShoppingCard={onUpdateShoppingCard}
                  key={product.id}
                  product={product}
                  value={this.getProductShoppingCardCoutner(product)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProducts;
