
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';


function App() {


  const [mode,setMode]=React.useState('light')
  const toggleMode=()=>{
   if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor='#292c35'
     document.body.style.color='white'
   }  
   else{
     setMode('light')
     document.body.style.backgroundColor='white'
     document.body.style.color='#292c35'
   }
  }


  return (
    <>
      {/* <Navbar title="Fifly" aboutText="About Us" /> */}
      <Navbar title="Fifly" mode={mode} toggleMode={toggleMode}  />
      <div className='container'>

      {/* Enable to display Textform */}
         <TextForm heading="Enter the text to analyze" mode={mode} /> 

      </div>

    {/* <About  /> */}

    </>
  );
}

export default App;
