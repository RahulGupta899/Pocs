import './styles/CounterGroup.css';
import Counter from './Counter.js';

function CounterGroup(props){
    
    let toSetCounterNo = props.toSetCounterNo;
    let toSetCounterValue = props.toSetCounterValue;
    let resetInfoToDefaultParent = props.resetInfoToDefault;



    return(
        <div className="counter-group">
            <Counter counterNo={1} toSetCounterNo={toSetCounterNo} toSetCounterValue = {toSetCounterValue} resetInfoToDefaultParent={resetInfoToDefaultParent}/>
            <Counter counterNo={2} toSetCounterNo={toSetCounterNo} toSetCounterValue = {toSetCounterValue} resetInfoToDefaultParent={resetInfoToDefaultParent}/>
            <Counter counterNo={3} toSetCounterNo={toSetCounterNo} toSetCounterValue = {toSetCounterValue} resetInfoToDefaultParent={resetInfoToDefaultParent}/>
            <Counter counterNo={4} toSetCounterNo={toSetCounterNo} toSetCounterValue = {toSetCounterValue} resetInfoToDefaultParent={resetInfoToDefaultParent}/>
        </div>
    )
}

export default CounterGroup;