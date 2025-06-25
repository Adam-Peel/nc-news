import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import fetchData from "../utils/fetch";
import CommentsFeed from "../components/CommentsFeed";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useParams } from "react-router";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";

function SingleArticlePage() {
  const [articleData, setArticleData] = useState(null);
  const [articleError, setArticleError] = useState(null);
  const { article_id } = useParams();
  const { users } = useContext(UserContext);

  function provideAvatar(author) {
    console.log(users.username);
    return users.map((user) => {
      if (author === user.username) {
        return (
          <>
            <Avatar
              alt={`${user.username}`}
              src={`${user.avatar_url}`}
              sx={{ width: 56, height: 56 }}
            />
          </>
        );
      } else {
      }
    });
    return <Avatar>{author[0]}</Avatar>;
  }

  useEffect(() => {
    const fetchArticle = async function () {
      try {
        const fetchedArticle = await fetchData(
          `https://news-aggregator-7e9t.onrender.com/api/articles/${article_id}`
        );
        setArticleData(fetchedArticle);
        setArticleError(null);
      } catch (err) {
        setArticleError(err.message);
        setArticleData(null);
      }
    };
    fetchArticle();
  }, [article_id]);

  if (articleError) {
    console.log(articleError);
    return (
      <main>
        <h3>Error...</h3>
      </main>
    );
  }

  if (!articleData) {
    return (
      <main>
        <Stack spacing={1}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={60}
            sx={{ bgcolor: "#ffffde" }}
          />
        </Stack>
      </main>
    );
  }

  return (
    <main>
      <article>
        <section className="article-head">
          <img
            className="article-head-image"
            src={articleData.article.article_img_url}
          ></img>
        </section>
        <h2 id="article-head-title">{articleData.article.title}</h2>
        <h3 id="article-head-subtitle">{articleData.article.topic}</h3>
        <div id="article-tagline">
          <CalendarMonthIcon />
          {articleData.article.created_at.slice(0, 10)}{" "}
        </div>
        <section className="article-body">
          <span className="article-start-accent">
            {articleData.article.body[0]}
          </span>
          {articleData.article.body.slice(1)}
        </section>
        <div id="article-author">
          <h4>
            <span>{provideAvatar(articleData.article.author)}</span>
            {articleData.article.author}
          </h4>
        </div>

        <CommentsFeed
          articleId={articleData.article.article_id}
          articleVotes={articleData.article.votes}
          articleCommentCount={articleData.article.comment_count}
        />
      </article>
    </main>
  );
}

export default SingleArticlePage;
