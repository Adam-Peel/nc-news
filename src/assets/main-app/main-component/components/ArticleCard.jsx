function ArticleCard() {
  return (
    <section className="article-card">
      <section className="article-card-head">
        <div className="article-card-head-image">IMAGE HERE</div>
        <div className="article-card-head-info">
          <h2>Article title</h2>
          <p>Article Topic</p>
          <br>Article Author: Date</br>
        </div>
      </section>
      <section className="article-card-stats">
        <ul className="article-card-stats-list">
          <li>Comment Count stat</li>
          <li>Vote Count stat</li>
        </ul>
      </section>
    </section>
  );
}

export default ArticleCard;
