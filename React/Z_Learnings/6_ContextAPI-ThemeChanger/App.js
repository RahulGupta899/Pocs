import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import React from 'react'
export let ThemeContext = React.createContext("");

function App() {
  let [theme,setTheme] = React.useState("dark");
  const changeTheme = function(){
    if(theme == 'dark') setTheme("light");
    else setTheme("dark");
  }

  const handleSelectChange = function(e){
    setTheme(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Theme Changer App</h1>
      <button onClick={changeTheme}>Change Theme</button>
      <select vlaue={theme} onChange={handleSelectChange}>
        <option value="">THEME</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="github">Github</option>
        <option value="horizon">Horizon</option>
        <option value="lame">Lame</option>
      </select>
      let [secret,setSecret] = React.useState("");
      <ThemeContext.Provider value={secret}>
          <Navigation/>
          <Footer/>
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;


