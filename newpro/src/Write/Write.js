// Write.js

import React, { useState } from 'react';
import "./Write.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [publishedPosts, setPublishedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handlePublish = () => {
    const newPost = { title, content, file };
    setPublishedPosts((prevPosts) => [...prevPosts, newPost]);

    // Log the published content to the console
    console.log("Published Content:", newPost);

    // Clear form after publishing
    setTitle("");
    setContent("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const filteredPosts = publishedPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="write">
      <img className="writeImg" src="https://cdn.pixabay.com/photo/2020/05/11/08/17/cute-5157056_1280.jpg" />

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story......"
            type="text"
            className="writeInput writeText"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="button"
          className="writeSubmit"
          onClick={handlePublish}
        >
          Publish
        </button>
      </form>

      {filteredPosts.map((post, index) => (
        <div key={index} className="publishedContent">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.file && (
            <img
              src={URL.createObjectURL(post.file)}
              alt="Uploaded"
              className="uploadedFile"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Write;
