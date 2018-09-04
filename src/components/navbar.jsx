import React, {Component} from 'react';

class Navbar extends Component {


    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounter}
                    </span>
                </a>
            </nav>
        )
    }
}

export default Navbar;

