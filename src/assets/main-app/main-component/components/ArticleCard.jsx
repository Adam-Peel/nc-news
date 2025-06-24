function ArticleCard(article) {
  return (
    <section className="article-card" key={article.article.id}>
      {/* <section className="article-card-head"> */}
      {/* <div className="article-card-head-image-placeholder"> */}
      <img
        className="article-card-head-image"
        src={article.article.article_img_url}
        alt="An image of the article"
      ></img>
      {/* </div> */}
      {/* </section> */}
      <section>
        <div className="article-card-head-info">
          <h3 className="article-card-head-title">{article.article.title}</h3>
          <br />
          {article.article.topic}
          <br />
          {article.article.author}
          {" : "}
          {article.article.created_at}
        </div>
      </section>
      <section className="article-card-stats">
        <ul className="article-card-stats-list">
          <li>📣: {article.article.comment_count}</li>
          <li>🗳️: {article.article.votes}</li>
        </ul>
      </section>
    </section>
  );
}

export default ArticleCard;
