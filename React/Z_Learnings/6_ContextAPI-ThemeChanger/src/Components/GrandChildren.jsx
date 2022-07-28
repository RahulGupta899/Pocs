import React from 'react';
import { SecretMsgContext } from "./GrandParent";

function GrandChildren(){
    let secretMsg = React.useContext(SecretMsgContext);
    console.log("Rendered GrandChildren");
    return(
        <div>
            <h1>GrandChildren</h1>
            <h2>Secret Information by GrandParent: {secretMsg}</h2>
        </div>
    )
}


export default GrandChildren;