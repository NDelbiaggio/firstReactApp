
import React, {Component} from 'react';

class Counter extends Component {

    state = {
        value: this.props.counter.value,
        tags: [
            'tag1' , 'tag2' , 'tag3'
        ]
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    }

    getBadgeClasses(){
        let { value } = this.state;
        let classes = "badge m-2 badge-";
        return classes += value === 0 ? 'warning' : 'primary';
    }

    formatCount(){
        let {value} = this.state;
        return value === 0 ? 'ZERO' : value;
    }

    render(){
        return (
            <div>
                <span className={this.getBadgeClasses()} > {this.formatCount()} </span>
                <button
                    onClick={this.handleIncrement}
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