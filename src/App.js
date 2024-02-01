
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';



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

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertMain={runAlert} />

      <div className="container">
       <TextForm heading="Enter the text to analyze" mode={mode} alert1={showAlert} />
        </div>
      
    </>
  );
}

export default App;
