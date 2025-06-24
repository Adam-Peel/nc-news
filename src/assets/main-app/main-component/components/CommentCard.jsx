import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -7,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

function CommentCard(comment) {
  return (
    <section className="comment-card">
      <div className="comment-card-head-info">
        <h4>
          <PersonIcon />
          {comment.comment.author}
        </h4>
      </div>
      <div className="comment-card-body">{comment.comment.body}</div>
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
