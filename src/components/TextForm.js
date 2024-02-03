import React, { useState } from 'react';

export default function TextForm(props) {

  const [text, setText] = useState("");
  // const [bcopy, setCopy] = useState("Copy All");
  // const [clicked_copy, setBTN_color] = useState("btn btn-primary my-3 mx-3");



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


  // const Paste = () => {
  //   // console.log("Paste button was clicked");
  //   navigator.clipboard.readText()
  //  .then(text => {
  //       // console.log(text);
  //       let newText = text;
  //       setText(newText);
  //     })
  //  .catch(err => {
  //       console.log(err);
  //     });
  // }


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


    // <-----New alert added for clipboard------->
    // setCopy("Copied");
    // setBTN_color("btn btn-warning my-3 mx-3 ")
    // setTimeout(()=>{
    //   setCopy("Copy All");
    //   setBTN_color("btn btn-primary my-3 mx-3")
    // },3000)

    props.alert1('Copied to clipboard', 'success')
  }

  const removeSpace = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
  }


  // text="your text 1 ";  //wrong way to set text
  // setText("your text 2"); //right way to set

  return (
   
    <>
      <form>
        <h5 className='my-2'>{props.heading}
          
        </h5>
        <textarea value={text} placeholder="Error 404! ------->Don’t worry, it’s not a bug. Essentially, this is my app, so I can write whatever I want. Hehe" className={`form-control ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} style={{ backgroundColor: props.mode === 'dark' ? '#292c35' : 'white', color: props.mode === 'dark' ? 'white' : '#292c35' }} onChange={handelonchange} rows="7"></textarea>




        <button type="button" className="btn btn-primary my-1 fixbtn" onClick={handelUC}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary my-1 fixbtn" onClick={handelLC}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-1 fixbtn" onClick={removeSpace}>Remove Extra Space</button>
        <button type="button" className="btn btn-primary my-1 fixbtn" onClick={copyTxt}>Copy All</button>
        <button type="button" className="btn btn-danger my-1 fixbtn " onClick={clearText}>Clear All</button>
      </form>

      <div className="container ">
        <h5>Your text summary</h5>
        <div className='one-line'>
        <p><span>{text.trim().split(/\s+/).filter((elem)=>{return elem.length!==0}).length}</span> words & <span>{text.length - (text.split(" ").length - 1)}</span> characters</p>
        <div className='home-right'>
            <ul className="logo-links">
              <li>
                <a href="https://www.facebook.com/razu.sharmaa" target="_blank">
                  <i  className={`fa-brands fa-facebook logo-follow scale-yel ${props.mode === 'dark' ? 'd-mode' : 'l-mode'}`}></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
      </div>

      


    </>
  )
}
