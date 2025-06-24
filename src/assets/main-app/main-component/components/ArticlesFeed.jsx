import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetch";

function ArticlesFeed({ awaitingAPI, baseURL, setAwaitingAPI }) {
  const [articlesData, setArticlesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async function () {
      try {
        if (awaitingAPI) {
          const data = await fetchData(baseURL);
          setArticlesData(data);
          setAwaitingAPI(false);
          setError(null);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchArticles(), [awaitingAPI, baseURL];
  });

  if (error) {
    console.log(error);
    return <div>Error: Something went wrong</div>;
  }

  if (!articlesData) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="articles-feed">
      {articlesData.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}

export default ArticlesFeed;
