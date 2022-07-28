import Parent from "./Parent";
import React from 'react';

export const familySecret = React.createContext("");

function GrandParent(){
    console.log("GrandParent Rendered");

    let [secret,setSecret] = React.useState("1 Billion hidden in house");
    let [inputText,setInputText] = React.useState("");
    
    const handleInput = function(e){
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleUpdate = function(){
        setSecret(inputText);
    }


    

    return(
        <familySecret.Provider value={secret}>
            <h2>Grand Parent</h2>
            <input type="text" onChange={handleInput} placeholder="update Secret..."></input>
            <button onClick={handleUpdate} >Update</button>
            <h2>🔽</h2>
            <Parent/>
        </familySecret.Provider>
    )
}
export default GrandParent;