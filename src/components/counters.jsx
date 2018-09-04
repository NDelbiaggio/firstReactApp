

import React, {Component} from 'react';

import Counter from './counter';

class Counters extends Component {

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    handleDelte = (counterId) => {
        let counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {

    }

    render(){
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary m-2 btn-sm">
                    Reset
                </button>
                {this.state.counters.map(counter =>{
                    return  <Counter 
                        key = {counter.id} 
                        onDelete = {this.handleDelte}
                        counter = {counter}
                    />
                })}
            </div>
        )
    }

}

export default Counters;