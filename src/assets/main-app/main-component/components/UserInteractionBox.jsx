import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

function UserInteractionBox({ articleId, articleVotes }) {
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
        <span>
          <button>Up</button>
        </span>
        <span>
          <HowToVoteIcon />
          {"--"} {articleVotes}
        </span>
        <span>
          <button>Up</button>
        </span>
      </div>
    </section>
  );
}

export default UserInteractionBox;
