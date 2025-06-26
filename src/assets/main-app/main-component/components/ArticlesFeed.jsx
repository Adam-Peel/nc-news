import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetch";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

function ArticlesFeed({ title, url, topicChange }) {
  const [articlesData, setArticlesData] = useState(null);
  const [articlesError, setArticlesError] = useState(null);
  const [baseURL, setBaseURL] = useState(
    `https://news-aggregator-7e9t.onrender.com/api/articles${url}`
  );
  const [searchParams, setSearchParams] = useState(null);

  useEffect(() => {
    const fetchArticles = async function () {
      if (searchParams) {
        setBaseURL(
          `https://news-aggregator-7e9t.onrender.com/api/articles${url}&${searchParams}`
        );
      } else {
        setBaseURL(
          `https://news-aggregator-7e9t.onrender.com/api/articles${url}`
        );
      }
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
  }, [baseURL, topicChange, searchParams]);

  function handleChange(event) {
    setSearchParams(event.target.value);
  }

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
  console.log(url, searchParams);
  return (
    <>
      <section className="searchbar">
        <h3 className="article-start-accent">{title}</h3>
        <nav>
          <form>
            <label htmlFor="sort-by">Sort by:</label>
            <select id="sort-by" onChange={handleChange}>
              <option value="" disabled selected>
                Sort by
              </option>
              <option value="sort=votes:desc">Votes: Descending</option>
              <option value="sort=votes:asc">Votes: Ascending</option>
              <option value="sort=created_at:asc">Date: Descending</option>
              <option value="sort=created_at:desc">Date: Ascending</option>
            </select>
          </form>
        </nav>
      </section>
      <section className="articles-feed">
        {articlesData.articles.map((article) => (
          <ArticleCard article={article} />
        ))}
      </section>
    </>
  );
}

export default ArticlesFeed;
