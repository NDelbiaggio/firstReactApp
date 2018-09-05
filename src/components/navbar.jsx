import React from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" style={{ color: "white" }}>
        Number of products:
        <span className="m-2 badge badge-pill badge-secondary">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
