import React from 'react'
function ChildCounter(props){
    console.log("rendered Child counter");
    let count = props.count;
    let Increment1 = props.Increment1;
    return(
        <div>
            <button>First counter clone</button>
            <span>{count}</span>
        </div>
    )
}
export default React.memo(ChildCounter);