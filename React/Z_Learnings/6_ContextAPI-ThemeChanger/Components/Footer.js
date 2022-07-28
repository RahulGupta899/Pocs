import React from 'react'
import './Styles/theme.css'
import { ThemeContext } from '../App';

function FooterText(){
    let cTheme = React.useContext(ThemeContext);
    return(
        <div className={cTheme}>
            <div>Loremipsum ........ </div>
            <div>................................</div>
            <div>................................</div>
        </div>
        

    )
}

function Footer(){
    return(
        <div>
            <h1>Footer</h1>
            <div>🔽</div>
            <FooterText/>
            <h1>-----------------------</h1>
        </div>
    )
}

export default Footer;