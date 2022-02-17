import React, { useState } from 'react';


export default function Form(props) {
  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3 p-2">
          <h1 className='mb-3 text-center'>{props.heading}</h1>
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="Form-Box" rows="12"></textarea>
          <button disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Convert to Upper-Case</button>
          <button disabled={text.length === 0} className="btn btn-success my-4 mx-2" onClick={handleLowerClick}>Convert to Lower-Case</button>
          <button disabled={text.length === 0} className="btn btn-info my-4 mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <h1>Counter</h1>
        <span><b>{text.split(" ").filter((e) => { return e.length !== 0 }).length}</b> words</span> &nbsp;&nbsp;<span><b>{text.length}</b> characters</span>
        <p><b>{0.0045 * text.split(" ").filter((e) => { return e.length !== 0 }).length}</b> minutes read</p>
        <h2 className='mt-2'>Preview</h2>
        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="Form-Box" rows="12"></textarea>
      </div>
    </>

  )
}
