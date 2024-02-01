
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


function App() {


  const [mode, setMode] = React.useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#292c35'
      document.body.style.color = 'white'
      document.title = 'TextUtils-Dark'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#292c35'
      document.title = 'TextUtils-Light'
    }
  }

  const [runAlert, set_runAlert] = React.useState(null)

  const showAlert = (message, type) => {
    set_runAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      set_runAlert(null)
    }, 2000)
  }


  return (
    <>



      {/* <Navbar title="Fifly" aboutText="About Us" /> */}



      
      <BrowserRouter>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertMain={runAlert} />

      <div className="container">

        <Routes>
      
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} alert1={showAlert} />} />
          <Route path="/about/*" element={<About  />} />   
      
        </Routes>
        </div>
      </BrowserRouter>
        



    </>
  );
}

export default App;
