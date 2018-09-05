import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    let { value } = this.props;
    let classes = "badge m-2 badge-";
    return (classes += value === 0 ? "warning" : "primary");
  }

  formatCount() {
    let { value } = this.props;
    return value === 0 ? "ZERO" : value;
  }

  handleIncrement = () => {
    let value = this.props.value + 1;
    this.props.onUpdateShoppingCard(value);
  };

  handleDecrement = () => {
    let value = this.props.value - 1;
    if (value >= 0) {
      this.props.onUpdateShoppingCard(value);
    }
  };

  styleButton = {
    flexGrow: "1"
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <button
          style={this.styleButton}
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          style={this.styleButton}
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
