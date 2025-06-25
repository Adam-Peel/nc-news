import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetch";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function ArticlesFeed({ url }) {
  const [articlesData, setArticlesData] = useState(null);
  const [articlesError, setArticlesError] = useState(null);
  const [baseURL, setBaseURL] = useState(
    `https://news-aggregator-7e9t.onrender.com/api/articles${url}`
  );

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
    return (
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
    );
  }

  return (
    <>
      <section className="articles-feed">
        {articlesData.articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </section>
    </>
  );
}

export default ArticlesFeed;
