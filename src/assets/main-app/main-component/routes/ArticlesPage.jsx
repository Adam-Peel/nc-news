import ArticlesFeed from "../components/ArticlesFeed";
import { useParams, useSearchParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const keywords = searchParams.get("keywords");

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
