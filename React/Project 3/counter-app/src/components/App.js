import './styles/App.css';
import CounterGroup from './CounterGroup.js';
import ResetBox     from './ResetBox.js';
import React from 'react';
// @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');


function App(){
    let [toSetCounterNo,updateCounterNo] = React.useState("");
    let [toSetCounterValue,updateCounterValue] = React.useState("");

    let getInfoFromResetBox = function(cno, val){
        updateCounterNo(cno);
        updateCounterValue(val);
    }

    const resetInfoToDefault = function(){
        updateCounterNo("");
        updateCounterValue("");
    }

    return(
        <div>
            <h1 className="app-title"><span>Counter App</span></h1>
            <ResetBox getInfoFromResetBox={getInfoFromResetBox}/>
            <CounterGroup toSetCounterNo={toSetCounterNo} toSetCounterValue={toSetCounterValue} resetInfoToDefault={resetInfoToDefault}/>
        </div>
    )
}

export default App;

