import fetchData from "../utils/fetch";
import CommentsFeed from "../components/CommentsFeed";
import UserInteractionBox from "../components/UserInteractionBox";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SingleArticlePage({ awaitingAPI, setAwaitingAPI, error, setError }) {
  const [articleData, setArticleData] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    const fetchArticle = async function () {
      if (awaitingAPI)
        try {
          const data = await fetchData(
            `https://news-aggregator-7e9t.onrender.com/api/articles/${article_id}`
          );
          setArticleData(data);
          setAwaitingAPI(false);
          setError(null);
        } catch (err) {
          setAwaitingAPI(false);
          setError(err);
        }
    };
    fetchArticle(), [awaitingAPI, article_id];
  });

  if (error) {
    console.log(error);
    return <h3>Error: Something went wrong</h3>;
  }

  if (!articleData) {
    return <h3>Loading....</h3>;
  }

  console.log(articleData);
  return (
    <main>
      <article>
        <section className="article-head">
          <div className="article-head-image">
            <img src={articleData.article.article_img_url}></img>
          </div>
          <div className="article-head-info">
            <h2>{articleData.article.title}</h2>
            <p>{articleData.article.topic}</p>
            <br />
            {articleData.article.author} :{" "}
            {articleData.article.created_at.slice(0, 10)}
          </div>
        </section>
        <section>
          <h3>Body</h3>
          {articleData.article.body}
        </section>
        <section>
          <UserInteractionBox />
        </section>
        <section>
          <CommentsFeed />
        </section>
      </article>
    </main>
  );
}

export default SingleArticlePage;
