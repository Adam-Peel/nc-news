import CommentIcon from "@mui/icons-material/Comment";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

function ArticleCard(article) {
  return (
    <section className="article-card" key={article.article.id}>
      <img
        className="article-card-head-image"
        src={article.article.article_img_url}
        alt="An image of the article"
      ></img>
      <section>
        <div className="article-card-head-info">
          <h3 className="article-card-head-title">{article.article.title}</h3>
          <br />
          {article.article.topic}
          <br />
          {article.article.author}
          {" : "}
          {article.article.created_at.slice(0, 10)}
        </div>
      </section>
      <section className="article-card-stats">
        <ul className="article-card-stats-list">
          <li>
            <CommentIcon /> {article.article.comment_count}
          </li>
          <li>
            <HowToVoteIcon /> {article.article.votes}
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ArticleCard;
