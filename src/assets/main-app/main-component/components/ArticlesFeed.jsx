import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetch";

function ArticlesFeed({ baseURL }) {
  const [articlesData, setArticlesData] = useState(null);
  const [articlesError, setArticlesError] = useState(null);
  console.log(baseURL);

  useEffect(() => {
    const fetchArticles = async function () {
      try {
        const data = await fetchData(baseURL);
        setArticlesData(data);
        setArticlesError(null);
      } catch (err) {
        setArticlesError(err.message);
        setArticlesData(null);
      }
    };
    fetchArticles();
  }, [baseURL]);

  if (articlesError) {
    console.log(articlesError);
    return <div>Error: Something went wrong</div>;
  }

  if (!articlesData) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section className="articles-feed">
        {articlesData.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </>
  );
}

export default ArticlesFeed;
