import React from 'react'
import Children from './Children'
import {SecretMsgContext} from './GrandParent';
function Parent(){
    console.log("Rendered Parent");
    let secretMsg = React.useContext(SecretMsgContext);
    return(
        <div>
            <h1>Parent</h1>
            <Children/>
        </div>
    )
}

export default React.memo(Parent);