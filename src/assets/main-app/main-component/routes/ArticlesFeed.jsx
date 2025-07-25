import ArticleCard from "../components/ArticleCard";
import { useState, useEffect } from "react";
import {
  useLocation,
  useParams,
  useSearchParams,
  Link,
} from "react-router-dom";
import fetchData from "../utils/fetch";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import BadRequest from "./BadRequest";
import Typography from "@mui/material/Typography";

function ArticlesFeed() {
  const { topic } = useParams();
  const location = useLocation();
  const [articlesData, setArticlesData] = useState(null);
  const [sortQuery, setSortQuery] = useState("");
  const [errorStatus, setErrorStatus] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const keywords = searchParams.get("keywords");

    let baseUrl = "https://www.adampeel.co.uk/api/articles";

    if (location.pathname === "/articles/search" && keywords) {
      baseUrl = `https://www.adampeel.co.uk/api/articles/search?keywords=${keywords}`;
      setTitle(`Search results`);
    } else if (topic) {
      baseUrl = `https://www.adampeel.co.uk/api/articles?topic=${topic}`;
      setTitle(`> #${topic}`);
    }

    if (sortQuery) {
      if (baseUrl.includes("?")) {
        baseUrl += `&${sortQuery}`;
      } else {
        baseUrl += `?${sortQuery}`;
      }
    }

    const fetchArticles = async function () {
      try {
        const data = await fetchData(baseUrl);
        setArticlesData(data);
        setErrorStatus(null);
      } catch (err) {
        setErrorStatus(err.status);
        setArticlesData(null);
        console.error("Error fetching articles:", err);
      }
    };
    fetchArticles();
  }, [location, topic, sortQuery]);

  function handleChange(event) {
    setSortQuery(event.target.value);
  }

  if (errorStatus) {
    return <BadRequest errorStatus={errorStatus} />;
  }

  if (!articlesData) {
    return (
      <div id="loading-container">
        <div className="loading-item">
          <Stack spacing={1} sx={{ mt: 5 }}>
            <Skeleton
              variant="text"
              width={210}
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
        <div className="loading-item">
          <Stack spacing={1} sx={{ mt: 5 }}>
            <Skeleton
              variant="text"
              width={210}
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
        <div className="loading-item">
          <Stack spacing={1} sx={{ mt: 5 }}>
            <Skeleton
              variant="text"
              width={210}
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
      </div>
    );
  }

  return (
    <main>
      <div className="searchbar">
        <Typography
          className="article-start-accent"
          sx={{
            typography: { xs: "s2", sm: "s1", md: "h6", lg: "h6", xl: "h6" },
          }}
        >
          <Link to={`/nc-news/articles`}>#All posts</Link>
          <Link to={`/nc-news/topics/${title}`}>{title}</Link>
        </Typography>
        <form>
          <br />
          <select
            id="sort-by"
            className="select"
            onChange={handleChange}
            defaultValue="Sort by"
            style={{
              width: "100%",
              maxWidth: "120px",
            }}
          >
            <option disabled>Sort by</option>
            <option value="sort=comment_count:desc">
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
