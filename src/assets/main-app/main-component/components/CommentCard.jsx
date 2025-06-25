import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function CommentCard(comment) {
  const { currentUser } = useContext(UserContext);

  function checkUser(user) {
    if (user === currentUser[0].username) {
      return (
        <IconButton aria-label="delete" color="warning" size="large">
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
          {comment.comment.author}
        </h4>
      </div>
      <div className="comment-card-body">
        {comment.comment.body} {checkUser(comment.comment.author)}
      </div>

      <CalendarMonthIcon />
      {comment.comment.created_at.slice(0, 10)}
      <div className="comment-card-head-vote">
        <Badge
          badgeContent={comment.comment.votes}
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
