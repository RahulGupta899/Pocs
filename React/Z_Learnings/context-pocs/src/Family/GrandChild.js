import { familySecret } from "./GrandParent";
import React from 'react';

function GrandChild(){
    console.log("Grandchild rendered");
    let secret = React.useContext(familySecret);

    return(
        <div>
            <h2>GrandChild</h2>
            <h5>FamilySecret via Grandparent : <span>{secret}</span> </h5>
        </div>
    )
}
export default GrandChild;