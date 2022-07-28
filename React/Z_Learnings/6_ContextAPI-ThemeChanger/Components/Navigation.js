import React from 'react'
import './Styles/theme.css';
import { ThemeContext } from '../App';

function Options(){
    let cTheme = React.useContext(ThemeContext);
    console.log("Options: "+cTheme);
    return(
        <div className={cTheme} > Option </div>
    )
}


function Navigation(){
    return(
        <div>
            <h1>NavBar</h1>
            <div>🔽</div>
            <Options />
            <Options/>
            <Options/>
            <h1>---------------------------</h1>
        </div>
    )
}

export default Navigation;