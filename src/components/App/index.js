import css from "./App.module.css";
import articles from "../../libs/articles";
// import Post from "../Post/index.js";
import Posts from "../Posts/index.js";

function App() {
  return (
    <div className={css.App}>
      <h1>WikiPigeon</h1>
      <Posts articles={articles} />
    </div>
  );
}

export default App;
