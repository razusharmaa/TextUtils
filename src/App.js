
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Secret from './components/Secret';
import Bby from './components/Bby';



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

  const [initialCode, setCode] = useState(null)
  const checkCode = (food) => {
    if (food === process.env.REACT_APP_CODE) {
      showAlert("You Guessed Right","success")
      setTimeout(() =>{
    setCode(process.env.REACT_APP_CODE)},2000)
    }
    else{
      showAlert("You Guessed Wrong","danger")
      setCode(null)
    }
   
  }


  return (
    <>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alertMain={runAlert} />

      <div className="container">
       {!initialCode &&  <TextForm heading="Enter the text to analyze" mode={mode} alert1={showAlert} code={checkCode} /> }
  {!initialCode  &&    <Secret mode={mode} code={initialCode} runMain={checkCode} alert1={showAlert}/>  }
       <Bby mode={mode} code={initialCode}/>
        </div>
      
    </>
  );
}

export default App;
