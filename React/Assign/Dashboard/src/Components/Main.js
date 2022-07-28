import React from 'react'
import Options from './Options'
import MainTable from './MainTable';
import './Styles/Main.css'

function Main() {
  return (
    <div className="main">
      <Options/>
      <MainTable/>
    </div>
  );
}

export default Main;
