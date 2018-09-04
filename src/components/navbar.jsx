import React, {Component} from 'react';

const Navbar = (props) =>{
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounter}
                </span>
            </a>
        </nav>
    )
}

export default Navbar;

