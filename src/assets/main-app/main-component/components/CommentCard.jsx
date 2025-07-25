import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteData from "../utils/delete";
import provideAvatar from "../utils/provideAvatar";
import Typography from "@mui/material/Typography";

function CommentCard({ comment, setCommentPosted }) {
  const { currentUser } = useContext(UserContext);
  let { users } = useContext(UserContext);
  const [deleteError, setDeleteError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const d = new Date(comment.created_at);
  const date = d.toDateString();

  async function deleteComment(id) {
    setButtonDisabled(true);
    setCommentPosted(false);
    setDeleteError("⏳ Deleting comment");
    const url = `https://www.adampeel.co.uk/api/comments/${id}`;
    try {
      const deleted = await deleteData(url);
      setDeleteError(null);
      comment.setCommentPosted(true);
    } catch (err) {
      setDeleteError("⚠️ Sorry, something went wrong");
      setCommentPosted(true);
      setButtonDisabled(false);
    }
  }

  function checkUser(user) {
    if (user === currentUser[0].username) {
      return (
        <>
          <br />
          <IconButton
            color="warning"
            onClick={() => deleteComment(comment.comment_id)}
            disabled={buttonDisabled}
            size="large"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </>
      );
    }
  }

  return (
    <section className="comment-card">
      <div className="comment-card-head-info">
        <h4>
          <span>{provideAvatar(comment.author, 40, users)}</span>
          <span>{comment.author}</span>
        </h4>
      </div>

      <div className="comment-card-body">
        <Typography
          sx={{
            typography: { md: "body1", sm: "body2", xs: "body2" },
          }}
        >
          {comment.body}
        </Typography>
      </div>
      <div className="comment-card-footer">
        <Typography
          variant="body2"
          sx={{
            typography: { md: "body2", sm: "body1", xs: "caption" },
          }}
        >
          <CalendarMonthIcon />
          {date.slice(4)}
          <Badge
            badgeContent={comment.votes}
            color="primary"
            showZero
            sx={{ ml: 2, mr: 2 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <HowToVoteIcon />
          </Badge>
          {checkUser(comment.author)}
        </Typography>
      </div>
    </section>
  );
}

export default CommentCard;
