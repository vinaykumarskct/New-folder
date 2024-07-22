// Review.js

import { Stack, Rating } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import './Review.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Review = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState('');
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    console.log('Rating value:', newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    // Validate comment and username before submission
    if (comment.trim() === '' || userName.trim() === '') {
      alert('Please leave a comment and enter your name before submitting.');
      return;
    }

    // Handle submission logic here
    setSubmitted(true);

    // Show comment in alert after submission
    alert(`Thank you for your submission!\n\nComment: ${comment}`);
  };

  return (
    <div className="gif-container">
      <div className="popup">
        {!submitted && (
          <>
            <h1 class="special-header">RATE US !</h1>
            <Stack spacing={2}>
              <Rating value={ratingValue} onChange={handleRatingChange} />
            </Stack>
          </>
        )}

        {!submitted && (
          <>
            <h1 class="special-header">LEAVE COMMENT</h1>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={handleUserNameChange}
            />
            <br /><br />
            <textarea
              type="text"
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              className="input"
              ref={inputRef}
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
            <br />
            <button className="button" onClick={handleSubmit}>
              SUBMIT
            </button>
          </>
        )}

        {submitted && (
          <>
            <h1 class="special-header">VIEW COMMENT</h1>
            <h2>
              <AccountCircleIcon /> {userName}
              <Stack>
                <Rating name="read-only" value={ratingValue} readOnly />
              </Stack>
            </h2>
            <h2>{comment}</h2>

            {/* Other comments */}
            <h2>
              <AccountCircleIcon /> ROHAN
              <Stack>
                <Rating name="read-only" value={4} readOnly />
              </Stack>
              <p> It is very interesting to read your blog ..!</p>
            </h2>
            <h2>
              <AccountCircleIcon /> NEHA
              <Stack spacing={2}>
                <Rating name="read-only" value={3} readOnly />
              </Stack>
              <p>blog page with New information and Amazing UI...</p>
            </h2>
            <button className="button">
              BACK
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;