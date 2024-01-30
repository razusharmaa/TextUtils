import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState("");
  const [bcopy, setCopy] = useState("Copy All");
  const [clicked_copy, setBTN_color] = useState("btn btn-primary my-3 mx-3");



  const handelUC = () => {
    // console.log("Uppercase button was clicked");
    // console.log(newText)
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handelLC = () => {
    // console.log("Lowercase button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }
  const clearText = () => {
    let newText = "";
    setText(newText);
  }

  const handelonchange = (event) => {
    console.log("handelonchange funstion was clicked");
    setText(event.target.value);

  }

  const copyTxt = () => {
    navigator.clipboard.writeText(text);
    setCopy("Copied");
    setBTN_color("btn btn-warning my-3 mx-3 ")
    setTimeout(()=>{
      setCopy("Copy All");
      setBTN_color("btn btn-primary my-3 mx-3")
    },3000)
  }

  const removeSpace = () => {
    let newText = text.replace(/\s+/g,' ');
    setText(newText);
  }


  // text="your text 1 ";  //wrong way to set text
  // setText("your text 2"); //right way to set

  return (
    <>
    <form>
      <h5 className='my-2'>{props.heading}</h5>
      <textarea value={text} placeholder='Enter your text here!' className="form-control" onChange={handelonchange} id="exampleFormControlTextarea1" rows="7"></textarea>
      <button type="button" className="btn btn-primary my-3" onClick={handelUC}>Convert to UpperCase</button>
      <button type="button" className="btn btn-primary my-3 mx-3" onClick={handelLC}>Convert to LowerCase</button>
      <button type="button" className="btn btn-primary my-3 " onClick={removeSpace}>Remove Extra Space</button>
      <button type="button" className={clicked_copy} onClick={copyTxt}>{bcopy}</button>
      <button type="button" className="btn btn-danger my-3  " onClick={clearText}>Clear Text</button>
    </form>

    <div className="container">
      <h5>Your text summary</h5>
      <p>{text.split(" ").length} words {text.length} characters</p>
    </div>

    </>
  )
}
