import React from "react";

function Article({ article }) {
  return (
    <>
      {article.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
}

export default Article;
