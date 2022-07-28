import {ThemeContext} from './App'
import React from 'react'

function Footer(){
    return(
        <div>
            <h1>Footer</h1>
            <FooterText/>
        </div>
    )
}

function FooterText(){
    let cTheme = React.useContext(ThemeContext);
    return(
        <div style={{border:'1px solid black'}} className={cTheme}>
            <h2>Sometimes my father giggle giggles</h2>
            <h2>...........................................................</h2>
            <h2>...........................................................</h2>
        </div>
    )
}

export default Footer;