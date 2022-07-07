import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    //useState('newText');
    
    const onClickHandler = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Coverted to UpperCase","Success");
    };
    const onClickloHandler = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Coverted to LowerCase","Success");
    };
    
    const onClickclrHandler = () => {
        if(text!== 0){
            props.showAlert("All the text has been cleared !!","Success");
        }else {
            props.showAlert("Please enter some text !!","Danger");
        }
        setText("");
        
    };
    const onClickfluHandler = () => { };
    const onClickcopyHandler = () => {
        let text = document.getElementById("textView");
        text.select();
        console.log(text.value.length);
        navigator.clipboard.writeText(text.value);
        if(text.value.length !== 0){
            props.showAlert("All the text has been copied !!","Success");
            
        }else {
            props.showAlert("Please enter some text !!","Danger");
        }
    };
    const onHandleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div className="container">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
                <textarea
                    className="form-control my-2"
                    value={text}
                    placeholder="Enter some text here..."
                    rows="8"
                    onChange={onHandleChange}
                    id="textView"
                    style={{
                        background: props.mode === 'light' ? 'white' : 'black',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }}
                ></textarea>
                <button className="btn btn-outline-info mx-2" onClick={onClickHandler}>
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-outline-primary mx-2"
                    onClick={onClickloHandler}
                >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-outline-warning mx-2"
                    onClick={onClickclrHandler}
                >
                    Clear All
                </button>
                <button
                    className="btn btn-outline-danger mx-2"
                    onClick={onClickcopyHandler}
                >
                    Copy All
                </button>
                <button
                    className="btn btn-outline-success mx-2"
                    onClick={onClickfluHandler}
                >
                    First Letter Uppercase
                </button>
            </div>
            <div className="container my-3">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your text summary</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white', fontSize: '23px'}}>
                    There are total <b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b>{" "}
                    characters.
                </p>
            </div>
            <div className="container my-3">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
                <textarea style={{ backgroundColor: props.mode === 'light'?'white':'black',color: props.mode === 'light' ? 'black' : 'white', fontSize: '25px' }}
                    className="form-control my-2"
                    rows="10"
                    value={text}
                    id="textView"></textarea>
            </div>
        </div>
    );
}
