import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import fetchData from "../utils/fetch";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import BadRequest from "../routes/BadRequest";
import Typography from "@mui/material/Typography";

function ArticlesFeed({ title, url, topicChange }) {
  const [articlesData, setArticlesData] = useState(null);
  const [baseURL, setBaseURL] = useState(
    `https://news-aggregator-7e9t.onrender.com/api/articles${url}`
  );
  const [searchParams, setSearchParams] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const navigate = useNavigate();

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
        setSearchParams(null);
        setErrorStatus(null);
      } catch (err) {
        setArticlesData(null);
        setSearchParams(null);
        setErrorStatus(err);
      }
    };
    fetchArticles();
  }, [baseURL, topicChange, searchParams]);

  function handleChange(event) {
    setSearchParams(event.target.value);
  }

  if (errorStatus) {
    return (
      <main>
        <BadRequest errorStatus={errorStatus} />
      </main>
    );
  }

  if (!articlesData) {
    return (
      <main className="main">
        <section className="articles-feed">
          <div className="article-card-container">
            <Stack spacing={1}>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ bgcolor: "grey.900" }}
              />
              <Skeleton
                variant="rounded"
                width={210}
                height={60}
                sx={{ bgcolor: "grey.900" }}
              />
            </Stack>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="searchbar">
        <Typography
          className="article-start-accent"
          sx={{
            typography: { xs: "h6", sm: "h6", md: "h5", lg: "h4", xl: "h4" },
          }}
        >
          #{title}
        </Typography>
        <form>
          <br />
          <select
            id="sort-by"
            className="select"
            onChange={handleChange}
            defaultValue="Sort by"
          >
            <option disabled>Sort by</option>
            <option value="?sort=comment_count:desc">
              Comments: Descending
            </option>
            <option value="sort=comment_count:asc">Comments: Ascending</option>
            <option value="sort=created_at:desc">Date: Descending</option>
            <option value="sort=created_at:asc">Date: Ascending</option>
            <option value="sort=votes:desc">Votes: Descending</option>
            <option value="sort=votes:asc">Votes: Ascending</option>
          </select>
        </form>
      </div>
      <section className="articles-feed">
        {articlesData.articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </section>
    </main>
  );
}

export default ArticlesFeed;
