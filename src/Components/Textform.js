import React ,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const  handleClean = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = '';
        setText(newtext)
        props.showAlert("CLEAN TEXT","success");

    }

    // const handleEmailExtract = () =>{
    //     // console.log("Uppercase was clicked" + text);
    //     let newtext = text.startsWith("@") + text.endsWith(".com");
    //     setText(newtext)
    // }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed","success");

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("COPIED TO CLIPBOARD","success");

    }

    //new heature to be done by me
    const  handleCapitalword = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext = text.matchAll
        setText(newtext)
        props.showAlert("CLEAN TEXT","success");

    }




         const [text, setText] = useState(' ');
         //text = "new text"; //wrong way to change the state
         //setText("new state"); //correct way to change the state
    return (
        <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#1b1178'}}>
        <h1>{props.heading} </h1>
     <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'
      ,color: props.mode ==='dark'?'white':'#1b1178'}}  id="myBox" rows="10"></textarea>
     </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClean}> Clean Text </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}> Remove extra space </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text </button>

      <button className="btn btn-primary mx-1" onClick={handleCapitalword}>Capitalize the letter</button>

    </div>
    
     <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#1b1178'}}>
        <h1> Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter SomeThing in the textbox above to Preview it here"} </p>
     
     </div>
</>
  )
}
