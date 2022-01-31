import "../App/App.css";
import React from "react";
import Post from "../Post/index.js";

function Posts({ articles }) {
  return (
    <>
      {Object.keys(articles).map((index) => (
        <article className="post" key={index}>
          <Post articles={articles} index={index} key={index} />
        </article>
      ))}
      ;
    </>
  );
}

export default Posts;
