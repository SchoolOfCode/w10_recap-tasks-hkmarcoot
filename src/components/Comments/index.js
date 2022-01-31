import React from "react";

function Comments({ comments }) {
  return (
    <>
      {comments.map((comment, index) => {
        return (
          <div className="comment" key={index}>
            <h4>{comment.name} says:</h4>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default Comments;
