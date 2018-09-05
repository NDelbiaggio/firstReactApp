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

  render() {
    return (
      <div
        className="container "
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <div className="row row-eq-height justify-content-center">
          {this.state.products.map(product => {
            return (
              <div key={product.id} className="col-md-4">
                <ProductCard key={product.id} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListProducts;
