import React from 'react'
import Parent from './Parent'

export let SecretMsgContext = React.createContext("");

function GrandParent(){
    console.log("Rendered GrandParent");
    let [secretMsg,SetSecretMsg] = React.useState("ZFRADB");

    const updateSecretMsg = function(){
        SetSecretMsg("FSE#@4034%TT")
    };

    return(
        
        <SecretMsgContext.Provider value = {secretMsg}>
            <button onClick={updateSecretMsg}>clickME</button>
            <h1>Grand Parent</h1>
            <Parent/>
        </SecretMsgContext.Provider>
    )
}

export default GrandParent;