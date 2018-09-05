import React, { Component } from "react";

import ProductTag from "./productBadges";

class ProductCard extends Component {
  state = {};

  cardStyle = {
    width: "18rem",
    height: "100%"
  };

  imageStyle = {
    height: "202px"
  };

  render() {
    const { imageSrc, name, description, price, tags } = this.props.product;

    return (
      <div className="card" style={this.cardStyle}>
        <img
          className="card-img-top"
          style={this.imageStyle}
          src={imageSrc}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <ProductTag tags={tags} />
          <h3>Price: {price}</h3>
        </div>
      </div>
    );
  }
}

export default ProductCard;
