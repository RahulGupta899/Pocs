import { ThemeContext } from "./App";
import React from 'react';

function HeaderText(){
   const cTheme = React.useContext(ThemeContext)
   console.log("Header Text: ",cTheme)
   return(
        <div style={{ border: '1px solid black'}} className={cTheme}>
            <h2>my money giggle giggle</h2>
            <h2>...............................................</h2>
            <h2>...............................................</h2>
        </div>
    )
}


function Header(){
    return(
        <div>
            <h1>Header </h1>
            <HeaderText />
        </div>
    )
}



export default Header;