import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

function UserInteractionBox({ articleId, articleCommentCount, articleVotes }) {
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
      </div>
      <div>
        <button
          id="article-bookmarked"
          className="user-article-interaction-box-button"
        >
          <BookmarkAddIcon />
          <br />
          <span className="user-interaction-button-text">Save</span>
        </button>
      </div>
      <div>
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
      <div>
        <span>
          <button
            id="article-downvote"
            className="user-article-interaction-box-button"
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
            Votes: {articleVotes}
          </span>
        </button>
        <span>
          <button
            id="article-upvote"
            className="user-article-interaction-box-button"
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
