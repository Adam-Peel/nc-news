import ArticlesFeed from "../components/ArticlesFeed";
import { useParams, useLocation } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { keywords } = queryParams;

  if (topic) {
    return (
      <>
        <ArticlesFeed
          title={topic || "all-posts"}
          url={`?topic=${topic}`}
          topicChange={topic}
        />
      </>
    );
  }

  if (keywords) {
    return (
      <>
        <ArticlesFeed
          title={`all-posts related to ${keywords}`}
          url={`/search?keywords=${keywords}`}
          topicChange={null}
        />
      </>
    );
  }

  return (
    <>
      <ArticlesFeed title={"all-posts"} url={"?topic="} />
    </>
  );
}

export default ArticlesPage;
