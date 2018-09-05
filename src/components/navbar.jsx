import React from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default Navbar;
