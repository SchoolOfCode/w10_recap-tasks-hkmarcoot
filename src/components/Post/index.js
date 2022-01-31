import "../App/App.css";
import H2header from "../h2header/index.js";
import Article from "../Article/index.js";
import Comments from "../Comments/index.js";

function Post({ articles, index }) {
  return (
    <>
      <H2header title={articles[index].title} />

      <Article article={articles[index]} />

      <button className="like-button">Like 👍</button>

      <section className="comment-section">
        <Comments comments={articles[index].comments} />
      </section>
    </>
  );
}

export default Post;
