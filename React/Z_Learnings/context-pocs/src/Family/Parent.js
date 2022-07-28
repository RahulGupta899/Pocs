import Child from "./Child";
import React from 'react';
function Parent(){
    console.log("Parent Rendered");
    return(
        <div>
            <h2>Parent</h2>
            <h2>🔽</h2>
            <Child/>
        </div>
    )
}

export default React.memo(Parent);