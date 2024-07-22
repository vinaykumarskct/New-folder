// Blog.js

import React from 'react';

const Blog = ({ publishedPosts }) => {
  return (
    <div>
      <h1>Blog Page</h1>
      {publishedPosts.map((post, index) => (
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

export default Blog;
