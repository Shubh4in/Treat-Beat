import React ,{useState}from 'react';

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase","Success");
  }
  const handleLoClick=()=>{
    console.log("lower case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase","Success");
  }
  const handleOnChange=(event)=>{
    console.log("on changed");
    setText(event.target.value);
  }
  const[text,setText]=useState('Enter Text here');
  //setText("new text");
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
        
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#1f343b',color:props.mode==='dark'?'white':'black'}} id="myBox"rows ="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1"onClick={handleUpClick}>convert Uppercase</button>
     <button className="btn btn-primary mx-1"onClick={handleLoClick}>convert lowercase</button>
    </div>
    <div className="container"my-3 style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008*text.split(" ").length}minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"ENTER SOMETHING IN THE TEXTBOX TO PREVIEW HERE"}</p>
    </div>
    </>
  );
}

