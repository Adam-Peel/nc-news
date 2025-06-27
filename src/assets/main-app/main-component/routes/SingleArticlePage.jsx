import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import fetchData from "../utils/fetch";
import CommentsFeed from "../components/CommentsFeed";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import provideAvatar from "../utils/provideAvatar.jsx";
import Sidebar from "../Sidebar.jsx";

function SingleArticlePage() {
  const { users } = useContext(UserContext);
  const [articleData, setArticleData] = useState(null);
  const { article_id } = useParams();
  const [errorStatus, setErrorStatus] = useState(null);
  const navigate = useNavigate();
  const d = new Date(articleData.article.created_at);
  const date = d.toDateString();

  useEffect(() => {
    const fetchArticle = async function () {
      try {
        const fetchedArticle = await fetchData(
          `https://news-aggregator-7e9t.onrender.com/api/articles/${article_id}`
        );
        setArticleData(fetchedArticle);
      } catch (err) {
        setArticleData(null);
        setErrorStatus(err);
      }
    };
    fetchArticle();
  }, [article_id]);

  if (errorStatus) {
    return (
      <main>
        <BadRequest errorStatus={errorStatus} />
      </main>
    );
  }

  if (!articleData) {
    return (
      <main>
        <h3>Loading...</h3>
        <Stack spacing={1}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="circular"
            width={200}
            height={200}
            sx={{ bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="rounded"
            height={200}
            sx={{ bgcolor: "#ffffde" }}
          />
        </Stack>
      </main>
    );
  }

  return (
    <main>
      <Sidebar />
      <article>
        <section className="article-head">
          <img
            className="article-head-image"
            src={articleData.article.article_img_url}
          ></img>
        </section>
        <h2 id="article-head-title">{articleData.article.title}</h2>
        <p id="article-info">
          <strong id="article-head-subtitle">
            {articleData.article.topic}
          </strong>
          <br />
          <CalendarMonthIcon />
          {date.slice(4)}{" "}
        </p>
        <section className="article-body">
          <span className="article-start-accent">
            {articleData.article.body[0]}
          </span>
          {articleData.article.body.slice(1)}
        </section>
        <div id="article-author">
          <h4>
            <span>{provideAvatar(articleData.article.author, 66, users)}</span>
            {articleData.article.author}
          </h4>
        </div>
      </article>

      <CommentsFeed
        articleId={articleData.article.article_id}
        articleVotes={articleData.article.votes}
        articleCommentCount={articleData.article.comment_count}
      />
    </main>
  );
}

export default SingleArticlePage;
