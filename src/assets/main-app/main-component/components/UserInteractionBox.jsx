import patchData from "../utils/patch";
import { useState, useRef, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import PostAddIcon from "@mui/icons-material/PostAdd";

function UserInteractionBox({ articleId, articleCommentCount, articleVotes }) {
  const [voteValue, setVoteValue] = useState(articleVotes);
  const [disableUpvoteButton, setDisableUpvoteButton] = useState(false);
  const [disableDownvoteButton, setDisableDownvoteButton] = useState(false);
  const [patchURL, setPatchURL] = useState(
    `https://news-aggregator-7e9t.onrender.com/api/articles/${articleId}`
  );
  const [patchError, setPatchError] = useState(null);
  const textAreaRef = useRef();

  async function upvoteChange(value) {
    setVoteValue((prev) => prev + value);
    setDisableUpvoteButton(true);
    setDisableDownvoteButton(false);
    const body = [{ inc_votes: value }];
    try {
      const patch = await patchData(patchURL, body);
      setVoteValue(patch.article.votes);
      setPatchError(null);
    } catch (err) {
      setVoteValue((prev) => prev - value);
      setDisableUpvoteButton(false);
      setDisableDownvoteButton(false);
      setPatchError("🪧 Sorry, vote did not work 🪧");
    }
  }

  async function downvoteChange(value) {
    setVoteValue((prev) => prev + value);
    setDisableUpvoteButton(false);
    setDisableDownvoteButton(true);
    const body = [{ inc_votes: value }];
    try {
      const patch = await patchData(patchURL, body);
      setPatchError(null);
      setVoteValue(patch.article.votes);
    } catch (err) {
      console.log(err);
      setVoteValue((prev) => prev - value);
      setDisableUpvoteButton(false);
      setDisableDownvoteButton(false);
      setPatchError("Sorry, vote did not work");
    }
  }

  async function submitComment(event) {
    event.preventDefault();
    const { currentUser } = useContext(UserContext);
    const destructuredUser = currentUser[0];
    const url = `https://news-aggregator-7e9t.onrender.com/api/articles/${articleId}/comments`;
    console.log(event.target.value);
    const postToSend = [
      { username: destructuredUser.username, body: event.target.value },
    ];
  }

  function focusOnComment() {
    textAreaRef.current.focus();
  }

  return (
    <section className="user-interaction-box">
      <div className="user-interaction-options">
        <span>
          <button
            id="article-read"
            className="user-article-interaction-box-button"
          >
            <MarkChatReadIcon />
            <br />
            <span className="user-interaction-button-text">Read</span>
          </button>
        </span>
        <button
          id="article-bookmarked"
          className="user-article-interaction-box-button"
        >
          <BookmarkAddIcon />
          <br />
          <span className="user-interaction-button-text">Save</span>
        </button>
        <button
          id="article-comments"
          className="user-article-interaction-box-button"
          onClick={focusOnComment}
        >
          <CommentIcon />
          <br />
          <span className="user-interaction-button-text">
            Comment: {articleCommentCount}
          </span>
        </button>
      </div>
      <div id="user-article-voting-options">
        <span>
          <button
            id="article-downvote"
            className="user-article-interaction-box-button"
            value={-1}
            disabled={disableDownvoteButton}
            onClick={() => downvoteChange(-1)}
          >
            <ThumbDownOffAltOutlinedIcon />
            <br />
            <span className="user-interaction-button-text">Downvote</span>
          </button>
        </span>
        <button
          id="user-interaction-article-votes-button"
          className="user-article-interaction-box-button"
        >
          <HowToVoteIcon />
          <br />
          <span className="user-interaction-button-text no-hover">
            Votes: {voteValue}
          </span>
        </button>
        <span>
          <button
            id="article-upvote"
            className="user-article-interaction-box-button"
            value={1}
            disabled={disableUpvoteButton}
            onClick={() => upvoteChange(1)}
          >
            <ThumbUpOutlinedIcon />
            <br />
            <span className="user-interaction-button-text">Upvote</span>
          </button>
        </span>
        <p id="voting-error">{patchError}</p>
      </div>
      <div id="commenting-area">
        <form method="post" onSubmit={submitComment}>
          <label htmlFor="comment-textarea-input">
            Add a comment:
            <br />
            <textarea
              width="100%"
              id="comment-textarea-input"
              name="body"
              ref={textAreaRef}
            />
          </label>
          <div id="comment-textarea-button">
            <button
              className="user-article-interaction-box-button"
              type="submit"
            >
              <PostAddIcon fontSize="small" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default UserInteractionBox;
