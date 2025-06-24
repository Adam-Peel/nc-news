function CommentCard(comment) {
  console.log(comment);
  return (
    <section className="comment-card">
      <section className="comment-card-head">
        <div className="comment-card-head-info">
          <h4>{comment.comment.author}</h4>
          <br />
          {comment.comment.created_at.slice(0, 10)}
        </div>
        <div className="comment-card-head-vote">{comment.comment.votes}</div>
      </section>
      <section className="comment-card-body">{comment.comment.body}</section>
    </section>
  );
}

export default CommentCard;
