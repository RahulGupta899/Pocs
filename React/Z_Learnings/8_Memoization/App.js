
import React from 'react'
import ChildCounter from './Counter';

function App(){
    console.log("rendered Parent");
    let [count1,setCount1] = React.useState(0);
    let [count2,setCount2] = React.useState(0);

    const Increment1 = React.useCallback(()=>{
        setCount1((count)=>{
            return count+1;
        })
    },[count1]);

    const Increment2 = ()=>{
        setCount2((count)=>{
            return count+1;
        })
    }

    const isEven = React.useMemo(()=>{
        console.log("Even funtion Executed...")
        for(let i=0; i<3000; i++){ // Delay 
        } 

        return count1%2 === 0;
    },[count1]);   // validation laga diya ki jab count1 - update ho tab hi yeh chale

    return(
        <div>
            <button onClick={Increment1}>First Counter </button>
            <span>{count1}</span>
            <span> {isEven ? "even" : "odd"} </span>

            <br></br>

            <button onClick={Increment2}>Second Counter </button>  
            <span>{count2}</span>

            <ChildCounter count={count1} increment={Increment1} />
            </div>
            
    )
}

export default App;
