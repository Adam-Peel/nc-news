import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import PersonIcon from "@mui/icons-material/Person";

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
        <HowToVoteIcon /> {comment.comment.votes}
      </div>
    </section>
  );
}

export default CommentCard;
