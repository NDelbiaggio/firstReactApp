import React, { Component } from "react";

class ProductBadges extends Component {
  state = {};
  render() {
    const { tags } = this.props;

    return (
      <div>
        {tags.map(tag => {
          const { color, name } = tag;
          let badgeClass = "m-2 badge badge-sm badge-";
          switch (color) {
            case "blue":
              badgeClass += "primary";
              break;
            case "green":
              badgeClass += "success";
              break;
            case "yellow":
              badgeClass += "warning";
              break;
            default:
              badgeClass += "primary";
          }
          return (
            <span key={name} className={badgeClass}>
              {name}
            </span>
          );
        })}
      </div>
    );
  }
}

export default ProductBadges;
