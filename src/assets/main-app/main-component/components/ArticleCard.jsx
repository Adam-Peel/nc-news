import CommentIcon from "@mui/icons-material/Comment";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";

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
          <h3 className="article-card-head-title"> {article.article.title}</h3>
          <h4 className="article-card-subtitle">{article.article.topic}</h4>
          <PersonIcon />
          {article.article.author}
          <br />
          <CalendarMonthIcon />
          {article.article.created_at.slice(0, 10)}
        </div>
      </section>
      <section className="article-card-stats">
        <ul className="article-card-stats-list">
          <li>
            <Badge
              badgeContent={article.article.comment_count}
              color="primary"
              showZero
            >
              <CommentIcon />
            </Badge>
          </li>
        </ul>
        <ul className="article-card-stats-list">
          <li>
            <Badge
              badgeContent={article.article.votes}
              color="primary"
              showZero
            >
              <HowToVoteIcon />
            </Badge>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default ArticleCard;
