import './styles/ResetBox.css';
import React from 'react'
function ResetBox(props){

    let [resetCounterNo,changeResetCounterNo] = React.useState("");
    let [resetCounterValue,changeResetCounterValue] = React.useState("");

    let sendInfoToParent = props.getInfoFromResetBox;

    const handleCounterNo = function(e){
        changeResetCounterNo(e.target.value);
    }

    const handleCounterValue = function(e){
        changeResetCounterValue(e.target.value) ;
    }

    const handleReset = function(e){
        sendInfoToParent(resetCounterNo,resetCounterValue);
        changeResetCounterNo("");
        changeResetCounterValue("");
    }

    return(
        <div className="reset-box">

            <h2>Reset Counter</h2>

            <span>Counter Number :</span>
            <input  className="input1" type="text"  value={resetCounterNo} onChange={handleCounterNo} />
            <br></br>

            <span>Value :</span>
            <input className="input2" type="text" value={resetCounterValue} onChange={handleCounterValue}/>
            <br></br>
            <button className="resetButton" onClick={handleReset}>RESET</button>
        </div>
    )
}

export default ResetBox;