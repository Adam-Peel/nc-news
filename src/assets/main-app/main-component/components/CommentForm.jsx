import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import postData from "../utils/post";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";

function CommentForm({ articleId, setCommentPosted }) {
  const [commentValue, setCommentValue] = useState("");
  const [postError, setPostError] = useState(null);
  const { currentUser } = useContext(UserContext);
  function handleChange(event) {
    const value = event.target.value;
    setCommentValue(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const destructuredUser = currentUser[0];
    const url = `https://www.adampeel.co.uk/api/articles/${articleId}/comments`;
    const postToSend = [
      { username: destructuredUser.username, body: commentValue },
    ];
    if (commentValue.length > 5) {
      setCommentValue("📨 Your post is being submitted 📨");
      try {
        setCommentPosted(false);
        const post = await postData(url, postToSend);
        setPostError(null);
        setCommentValue("");
        setCommentPosted(true);
      } catch (err) {
        setPostError("🪧 Sorry, the post did not work 🪧");
        setCommentPosted(true);
        console.log(err);
      } finally {
        setCommentPosted(true);
      }
    } else {
      setPostError("🪧 Sorry, the post is too short 🪧");
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
            onClick={() => setPostError(null)}
          />
        </label>
        <div id="comment-textarea-button">
          <Button
            className="user-article-interaction-box-button"
            type="submit"
            variant="contained"
          >
            <PostAddIcon fontSize="medium" />
          </Button>
          <span className="error-text">{postError}</span>
        </div>
      </form>
    </section>
  );
}

export default CommentForm;
