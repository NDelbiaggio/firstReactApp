
import React, {Component} from 'react';

class Counter extends Component {

    getBadgeClasses(){
        let { value } = this.props.counter;
        let classes = "badge m-2 badge-";
        return classes += value === 0 ? 'warning' : 'primary';
    }

    formatCount(){
        let {value} = this.props.counter;
        return value === 0 ? 'ZERO' : value;
    }

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()} > {this.formatCount()} </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick = {() => this.props.onDelete(this.props.counter.id)}
                    className = "btn btn-danger btm-sm m-2"
                >Delete
                </button>
            </div> );
    }

}

export default Counter;