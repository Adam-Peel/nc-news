import patchData from "../utils/patch";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import IconButton from "@mui/material/IconButton";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import Badge from "@mui/material/Badge";

function UserInteractionBox({ articleId, articleCommentCount, articleVotes }) {
  const [voteValue, setVoteValue] = useState(articleVotes);
  const [disableUpvoteButton, setDisableUpvoteButton] = useState(false);
  const [disableDownvoteButton, setDisableDownvoteButton] = useState(false);
  const [patchURL, setPatchURL] = useState(
    `https://www.adampeel.co.uk/api/articles/${articleId}`
  );
  const [patchError, setPatchError] = useState(null);

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
      setVoteValue((prev) => prev - value);
      setDisableUpvoteButton(false);
      setDisableDownvoteButton(false);
      setPatchError("🪧 Sorry, vote did not work 🪧");
    }
  }

  return (
    <section className="user-interaction-box">
      <div id="user-article-voting-options">
        <span>
          <IconButton
            id="article-downvote"
            className="user-article-interaction-box-button"
            value={-1}
            disabled={disableDownvoteButton}
            onClick={() => downvoteChange(-1)}
          >
            <ThumbDownOffAltOutlinedIcon />
          </IconButton>
        </span>
        <Badge color="primary" badgeContent={voteValue}>
          <HowToVoteIcon color="primary" sx={{ ml: 2 }} />
        </Badge>
        {/* </IconButton> */}
        <span>
          <IconButton
            id="article-upvote"
            className="user-article-interaction-box-button"
            value={1}
            disabled={disableUpvoteButton}
            onClick={() => upvoteChange(1)}
            sx={{ ml: 2 }}
          >
            <ThumbUpOutlinedIcon />
          </IconButton>
        </span>
        <p className="error-text">{patchError}</p>
      </div>
    </section>
  );
}

export default UserInteractionBox;
