import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import postData from "../utils/post";
import PostAddIcon from "@mui/icons-material/PostAdd";

function CommentForm({ articleId, setCommentPosted }) {
  const [commentValue, setCommentValue] = useState("");
  const [postError, setPostError] = useState(null);
  const { currentUser } = useContext(UserContext);
  console.log(articleId);
  function handleChange(event) {
    const value = event.target.value;
    setCommentValue(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const destructuredUser = currentUser[0];
    const url = `https://news-aggregator-7e9t.onrender.com/api/articles/${articleId}/comments`;
    const postToSend = [
      { username: destructuredUser.username, body: commentValue },
    ];
    try {
      const post = await postData(url, postToSend);
      setPostError(null);
      setCommentValue("");
      setCommentPosted(true);
    } catch (err) {
      setPostError("🪧 Sorry, the post did not work 🪧");
      setCommentPosted(true);
    } finally {
      setCommentPosted(true);
    }
  }

  return (
    <section id="commenting-area">
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="comment-textarea-input">
          Add a comment:
          <br />
          <textarea
            id="comment-textarea-input"
            name="body"
            value={commentValue}
            onChange={handleChange}
          />
        </label>
        <div id="comment-textarea-button">
          <button className="user-article-interaction-box-button" type="submit">
            <PostAddIcon fontSize="small" />
          </button>
          <span>{postError}</span>
        </div>
      </form>
    </section>
  );
}

export default CommentForm;
