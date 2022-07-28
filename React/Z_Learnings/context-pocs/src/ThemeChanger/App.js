import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Styles.css'

export const ThemeContext = React.createContext("");

function App(){
    console.log("App Rendered...");

    let [color,setColor] = React.useState("pink");
    const handleSelect = function(e){
        console.log(e.target.value)
        setColor(e.target.value);
    }
    
    return(
        <ThemeContext.Provider value={color}>
            <h1>ThemeChanger</h1>
            <select onChange={handleSelect}>
                <option>pink</option>
                <option>green</option>
                <option>white</option>
                <option>red</option>
            </select>
            <div>
                <Header/>
                <Footer/>
            </div>
        </ThemeContext.Provider>
    )
}


export default App;