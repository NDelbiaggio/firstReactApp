

import React, {Component} from 'react';

import Counter from './counter';

class Counters extends Component {

    render(){
        const { onReset, counters, onDelete, onIncrement  } = this.props;
        return (
            <div>
                <button 
                    onClick={onReset}
                    className="btn btn-primary m-2 btn-sm">
                    Reset
                </button>
                {counters.map(counter =>{
                    return  <Counter 
                        key = {counter.id} 
                        onIncrement = {onIncrement}
                        onDelete = {onDelete}
                        counter = {counter}
                    />
                })}
            </div>
        )
    }

}

export default Counters;