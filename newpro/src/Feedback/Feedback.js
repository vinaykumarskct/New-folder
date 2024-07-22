import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [comment, setComment] = useState("");

  const submit = (e) => {
    alert(comment);
  };

  const handle = (e) => {
    setComment(e.target.value);
  };



  return (
    <div>
      <div>
        <center>
          <form className='feed1'>
            <h1><u>FeedBack Form</u></h1><br></br>
            <input placeholder='Name' className='feedin'></input><br></br><br></br>
            <input placeholder='Registor No.' className='feedin'></input><br></br><br></br>
            <input placeholder='Email' className='feedin'></input><br></br><br></br>
            <textarea placeholder='Comments' className='fcom' onChange={handle} value={comment}></textarea>
            <br></br><br></br>
            <button className='feedb' onClick={submit}>
              Submit
            </button><br></br><br></br>
            <button className='feedb1'>
            <a href="mailto:guna.amypo@gmail.com">Send email</a>
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Feedback;