import React, { useState } from "react";

export default function TextBox(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case","success")
  };

  const handleLowClick = () => {
    let smallText = text.toLowerCase();
    setText(smallText);
    props.showAlert("converted to lower case", "success");
  };
  const handleClearClick = () => {
    let smallText = "";
    setText(smallText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(""); 
  return (
    <>
      <div className="container">
        <div className="form-group">
          <label for="exampleFormControlTextarea1">{props.heading}</label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="7"
          ></textarea>
        </div>

        {/* Buttons Start */}

        <button
          className="btn btn-primary mx-2 my-2 py-2"
          onClick={handleUpClick}
        >
          Convert to Upper Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2 py-2 color:green"
          onClick={handleLowClick}
        >
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary mx-2 my-2 py-2 color:green"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-2 my-2 py-2 color:green"
          onClick={handleCopy}
        >
          CopyText
        </button>

        <button
          className="btn btn-primary mx-2 my-2 py-2 color:green"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>

        {/* Buttons Over */}

      </div>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.005 * text.split(" ").length} minutes read </p>
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
