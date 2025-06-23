function UserInteractionBox() {
  return (
    <section className="user-interaction-box">
      <div>
        <button id="article-read">Article Read</button>
      </div>
      <div>
        <button id="article-bookmarked">Bookmark Article</button>
      </div>
      <div>
        <span>
          <button>Up</button>
        </span>
        <span>Votes</span>
        <span>
          <button>Up</button>
        </span>
      </div>
      <div>
        <textarea id="add-comment-textarea">Add comment</textarea>
      </div>
    </section>
  );
}

export default UserInteractionBox;
