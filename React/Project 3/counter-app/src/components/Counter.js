import './styles/Counter.css';
import React from 'react';

function Counter(props){
    let [counterValue,changeCounterValue] = React.useState(0);
    let counterNo = props.counterNo;

    let toSetCounterNo = props.toSetCounterNo;
    let toSetCounterValue = props.toSetCounterValue;
    let resetInfoToDefaultParent = props.resetInfoToDefaultParent;

    if(counterNo == toSetCounterNo  && toSetCounterValue != counterValue){
        changeCounterValue(toSetCounterValue);
        resetInfoToDefaultParent();
    }
    
    const increment = function(){
        changeCounterValue(Number(counterValue)+1);
    }
    const decrement = function(){
        changeCounterValue(Number(counterValue)-1);
    }

    return(
        <div className="counter">
            <h1>Counter {counterNo}</h1>
            <button onClick={increment}>+</button>
            <h1>{counterValue}</h1>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;