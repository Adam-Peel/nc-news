import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteData from "../utils/delete";

function CommentCard({ comment, setCommentPosted }) {
  const { currentUser } = useContext(UserContext);
  const [deleteError, setDeleteError] = useState(null);

  async function deleteComment(id) {
    console.log(id);
    setCommentPosted(false);
    setDeleteError("⏳ Deleting comment");
    const url = `https://news-aggregator-7e9t.onrender.com/api/comments/${id}`;
    try {
      const deleted = await deleteData(url);
      setDeleteError(null);
      comment.setCommentPosted(true);
    } catch (err) {
      setDeleteError("⚠️ Sorry, something went wrong");
      setCommentPosted(true);
    }
  }

  function checkUser(user) {
    if (user === currentUser[0].username) {
      return (
        <IconButton
          aria-label="delete"
          color="warning"
          size="large"
          onClick={() => deleteComment(comment.comment_id)}
        >
          <DeleteIcon />
        </IconButton>
      );
    }
  }
  return (
    <section className="comment-card">
      <div className="comment-card-head-info">
        <h4>
          <PersonIcon />
          {comment.author}
        </h4>
      </div>
      <div className="comment-card-body">
        {comment.body} {checkUser(comment.author)}
      </div>

      <CalendarMonthIcon />
      {comment.created_at.slice(0, 10)}
      <div className="comment-card-head-vote">
        <Badge
          badgeContent={comment.votes}
          color="primary"
          showZero
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <HowToVoteIcon />
        </Badge>
      </div>
    </section>
  );
}

export default CommentCard;
