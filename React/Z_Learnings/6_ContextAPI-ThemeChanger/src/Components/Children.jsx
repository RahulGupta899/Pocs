import React from 'react'
import GrandChildren from "./GrandChildren";
function Children(){
    console.log("Rendered Children");
    return(
        <div>
            <h1>Children</h1>
            <GrandChildren/>
        </div>
    )
}

export default React.memo(Children);