import { useState } from "react";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

function UserInteractionBox({ articleId, articleCommentCount, articleVotes }) {
  const [voteValue, setVoteValue] = useState(articleVotes);
  const [disableUpvoteButton, setDisableUpvoteButton] = useState(false);
  const [disableDownvoteButton, setDisableDownvoteButton] = useState(false);

  function upvoteChange() {
    setVoteValue((prev) => prev + 1);
    setDisableUpvoteButton(true);
    setDisableDownvoteButton(false);
  }

  function downvoteChange() {
    setVoteValue((prev) => prev - 1);
    setDisableUpvoteButton(false);
    setDisableDownvoteButton(true);
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
            onClick={() => downvoteChange()}
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
            onClick={() => upvoteChange()}
          >
            <ThumbUpOutlinedIcon />
            <br />
            <span className="user-interaction-button-text">Upvote</span>
          </button>
        </span>
      </div>
    </section>
  );
}

export default UserInteractionBox;
