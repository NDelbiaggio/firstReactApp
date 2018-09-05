import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0
  };

  getBadgeClasses() {
    let { value } = this.state;
    let classes = "badge m-2 badge-";
    return (classes += value === 0 ? "warning" : "primary");
  }

  formatCount() {
    let { value } = this.state;
    return value === 0 ? "ZERO" : value;
  }

  handleIncrement = () => {
    let value = this.state.value + 1;
    this.setState({ value }, () => {
      this.props.onUpdateShoppingCard(this.state.value);
    });
  };

  handleDecrement = () => {
    let value = this.state.value - 1;
    if (value >= 0) {
      this.setState({ value }, () =>
        this.props.onUpdateShoppingCard(this.state.value)
      );
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        {/* <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btm-sm m-2"
        >
          Delete
        </button> */}
      </div>
    );
  }
}

export default Counter;
