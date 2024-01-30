import React, { useState, useEffect } from 'react'

export default function About({themeNav}) {
  const [mytheme, setThemeAbout] = React.useState({
    color: 'black',
    backgroundColor: 'white',
    width:'100%'


  })

  useEffect(() => {

    if (themeNav == "light") {
      setThemeAbout({
        color: 'black',
        backgroundColor: 'white',
        width:'100%'
    
      })
    }
    else {
      setThemeAbout({
        color: 'white',
        backgroundColor: 'black',
        width:'100%'
    
      })
    }

  },[themeNav]);



  return (
    <div  style={mytheme}>

      <h4 id="scrollspyHeading1"  >First heading</h4>
      <p >The code you’ve provided doesn’t seem to be the source of the error message you’re seeing. The error is related to the selector ‘/navbarSupportedContent’, which isn’t present in the provided code. </p>
      <h4 id="scrollspyHeading2"  >Second heading</h4>
      <p >The code you’ve provided doesn’t seem to be the source of the error message you’re seeing. The error is related to the selector ‘/navbarSupportedContent’, which isn’t present in the provided code. </p>
      <h4 id="scrollspyHeading3"  >Third heading</h4>
      <p >The code you’ve provided doesn’t seem to be the source of the error message you’re seeing. The error is related to the selector ‘/navbarSupportedContent’, which isn’t present in the provided code. </p>
      <h4 id="scrollspyHeading4"  >Fourth heading</h4>
      <p >The code you’ve provided doesn’t seem to be the source of the error message you’re seeing. The error is related to the selector ‘/navbarSupportedContent’, which isn’t present in the provided code. </p>
      <h4 id="scrollspyHeading5"  >Fifth heading</h4>
      <p >The code you’ve provided doesn’t seem to be the source of the error message you’re seeing. The error is related to the selector ‘/navbarSupportedContent’, which isn’t present in the provided code. .</p>


    </div>
  )
}

