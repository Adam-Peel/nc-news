import fetchData from "../utils/fetch";
import CommentsFeed from "../components/CommentsFeed";
import UserInteractionBox from "../components/UserInteractionBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SingleArticlePage() {
  const [articleData, setArticleData] = useState(null);
  const [articleError, setArticleError] = useState(null);
  const { article_id } = useParams();

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
        <h3>Loading....</h3>
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
          <span className="article-head-info">
            <h2>{articleData.article.title}</h2>
            <p>{articleData.article.topic}</p>
            <br />
            {articleData.article.author} :{" "}
            {articleData.article.created_at.slice(0, 10)}
          </span>
        </section>
        <section className="article-body">
          <span className="article-start-accent">
            {articleData.article.body[0]}
          </span>
          {articleData.article.body.slice(1)}
        </section>
        <UserInteractionBox
          articleId={articleData.article.article_id}
          articleVotes={articleData.article.votes}
          articleCommentCount={articleData.article.comment_count}
        />

        <CommentsFeed articleId={articleData.article.article_id} />
      </article>
    </main>
  );
}

export default SingleArticlePage;
