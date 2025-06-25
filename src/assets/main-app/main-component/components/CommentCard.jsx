import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Badge from "@mui/material/Badge";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteData from "../utils/delete";
import Avatar from "@mui/material/Avatar";

function CommentCard({ comment, setCommentPosted }) {
  const { currentUser } = useContext(UserContext);
  const { users } = useContext(UserContext);
  const [deleteError, setDeleteError] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  async function deleteComment(id) {
    console.log(id);
    setButtonDisabled(true);
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
      setButtonDisabled(false);
    }
  }

  function checkUser(user) {
    if (user === currentUser[0].username) {
      return (
        <>
          <br />
          <Button
            color="warning"
            onClick={() => deleteComment(comment.comment_id)}
            disabled={buttonDisabled}
            variant="contained"
          >
            <DeleteIcon fontSize="small" />
          </Button>
        </>
      );
    }
  }

  function provideAvatar(author) {
    console.log(users.username);
    return users.map((user) => {
      if (author === user.username) {
        return (
          <>
            <Avatar alt={`${user.username}`} src={`${user.avatar_url}`} />
          </>
        );
      } else {
      }
    });
    return <Avatar>{author[0]}</Avatar>;
  }

  return (
    <section className="comment-card">
      <div className="comment-card-head-info">
        <h4>
          <span>{provideAvatar(comment.author)}</span>
          <span>{comment.author}</span>
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
