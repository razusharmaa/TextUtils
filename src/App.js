
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React from 'react';


function App() {

  const [mode,setMode]=React.useState('light')
  const toggleMode=()=>{
   if(mode==='light'){
     setMode('dark')
   }  
   else{
     setMode('light')
   }
  }


  return (
    <>
      {/* <Navbar title="Fifly" aboutText="About Us" /> */}
      <Navbar title="Fifly" mode={mode} toggleMode={toggleMode}  />
      <div className='container'>

        <TextForm heading="Enter the text to analyze" />    {/*  Enable to display Textform */}

      </div>

    {/* <About  /> */}

    </>
  );
}

export default App;
