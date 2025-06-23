function CommentCard() {
  return (
    <section className="comment-card">
      <section className="comment-card-head">
        <div className="comment-card-head-image">IMAGE HERE</div>
        <div className="comment-card-head-info">
          <h4>Username</h4>
          <br>Date</br>
        </div>
        <div className="comment-card-head-vote">↑ Votes ↓</div>
      </section>
      <section className="comment-card-body">
        Text here for each body of the comment
      </section>
    </section>
  );
}

export default CommentCard;
