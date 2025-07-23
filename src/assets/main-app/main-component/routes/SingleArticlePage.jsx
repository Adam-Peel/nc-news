import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import fetchData from "../utils/fetch";
import CommentsFeed from "../components/CommentsFeed";
import BadRequest from "./BadRequest.jsx";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import provideAvatar from "../utils/provideAvatar.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SingleArticlePage() {
  const { users } = useContext(UserContext);
  const [articleData, setArticleData] = useState(null);
  const { article_id } = useParams();
  const [errorStatus, setErrorStatus] = useState(null);
  const [articleDate, setArticleDate] = useState("");
  const myRef = useRef(null);

  useEffect(() => {
    const fetchArticle = async function () {
      try {
        const fetchedArticle = await fetchData(
          `https://news-aggregator-7e9t.onrender.com/api/articles/${article_id}`
        );
        setArticleData(fetchedArticle);
        const d = new Date(fetchedArticle.article.created_at);
        const date = d.toDateString();
        setArticleDate(date);
      } catch (err) {
        console.log(err);
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
      <>
        <main>
          <div id="loading-container">
            <div className="loading-item">
              <Stack spacing={1}>
                <Skeleton
                  variant="text"
                  sx={{ mt: 25, fontSize: "1rem", bgcolor: "grey.900" }}
                />
                <Skeleton
                  variant="circular"
                  width={200}
                  height={200}
                  sx={{ bgcolor: "grey.900" }}
                />
                <Skeleton
                  variant="rounded"
                  height={200}
                  sx={{ bgcolor: "grey.900" }}
                />
              </Stack>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <main>
      <Box
        sx={{
          maxWidth: 1250,
          marginLeft: {
            xs: "5%", // Default margin for extra-small screens
            sm: "17%", // Margin for small screens
            md: "21%", // Margin for medium screens
            lg: "24%", // Margin for large screens
            xl: "24%", // Margin for extra-large screens
          },
          marginRight: {
            xs: "5%", // Default margin for extra-small screens
            sm: "17%", // Margin for small screens
            md: "21%", // Margin for medium screens
            lg: "24%", // Margin for large screens
            xl: "24%", // Margin for extra-large screens
          },
        }}
      >
        <article className="article">
          <section>
            <Typography
              variant="body2"
              sx={{
                typography: {
                  md: "body2",
                  sm: "body1",
                  xs: "caption",
                },
              }}
            ></Typography>
          </section>
          <section className="article-body-container">
            <Typography
              className="article-start-accent"
              variant="body2"
              sx={{
                mt: 1,
                mb: 1,
              }}
            >
              all posts &gt; #{articleData.article.topic}
            </Typography>
            <Typography
              className="article-card-title"
              gutterBottom
              component="div"
              textAlign="left"
              variant="h5"
              sx={{
                typography: {
                  xs: "h6",
                  sm: "h5",
                  md: "h4",
                  lg: "h4",
                  xl: "h4",
                },
              }}
            >
              {articleData.article.title}
            </Typography>

            <img
              className="article-head-image"
              src={articleData.article.article_img_url}
            ></img>
            <section className="article-body">
              <Typography
                sx={{
                  typography: { md: "body1", sm: "body2", xs: "body2" },
                }}
              >
                <span className="article-start-accent">
                  {articleData.article.body[0]}
                </span>
                {articleData.article.body.slice(1)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 2, display: "flex", alignItems: "flex-end" }}
              >
                <span>
                  {provideAvatar(articleData.article.author, 35, users)}
                  <strong>{articleData.article.author}</strong>
                </span>
                <CalendarMonthIcon sx={{ ml: 5 }} /> {articleDate.slice(4)}{" "}
              </Typography>
            </section>
            <br />
            <div id="article-author">
              <Typography
                className="article-card-title"
                gutterBottom
                component="div"
                textAlign="left"
                sx={{ typography: { md: "h6", sm: "body1", xs: "body2" } }}
              ></Typography>
            </div>
          </section>
        </article>

        <CommentsFeed
          articleId={articleData.article.article_id}
          articleVotes={articleData.article.votes}
          articleCommentCount={articleData.article.comment_count}
        />
      </Box>
    </main>
  );
}

export default SingleArticlePage;
