import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
    const [text, setText] = useState("") 
    //text = "New Text"  //wrong way to update text
    //setText("New Text") //Correct way to update text
    const handelUpClick = () => {
        // console.log("Upper Case Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Covert into upper case", "primary")
    }
    const handelLowClick = () => {
        // console.log("Lower Case Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Covert into Lower case", "warning")
    }
    const handelOnChange = (event) => {
        // console.log("Text Area Changed")
        setText(event.target.value)
        props.showAlert("You are typing.....", "info")
    }
    const handelClearText = () => {
        setText("")
        props.showAlert("All text cleared", "danger")
    }
    const CopyText = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied text to clipboard", "info")
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Successfully removed extra spaces", "success")
    }

    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor : props.mode==='dark'?'#435485':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handelUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handelLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handelClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spacest</button>
            
        </div>
        <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read Time</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview it here"}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
