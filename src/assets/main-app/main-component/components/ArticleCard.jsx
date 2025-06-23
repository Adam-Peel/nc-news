function ArticleCard(article) {
  return (
    <section className="article-card" key={article.id}>
      <section className="article-card-head">
        <div className="article-card-head-image-placeholder">
          <img
            className="article-card-head-image"
            src={article.article_img_url}
            alt="An image of the article"
          ></img>
        </div>
        <div className="article-card-head-info">
          <h2>{article.title}</h2>
          <p>{article.topic}</p>
          <br />
          {article.author}
          {" : "}
          {article.created_at}
        </div>
      </section>
      <section className="article-card-stats">
        <ul className="article-card-stats-list">
          <li>{article.comment_count}</li>
          <li>{article.votes}</li>
        </ul>
      </section>
    </section>
  );
}

export default ArticleCard;
