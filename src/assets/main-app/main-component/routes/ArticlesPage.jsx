import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

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

  return (
    <>
      <ArticlesFeed title={"all-posts"} url={"?topic="} />
    </>
  );
}

export default ArticlesPage;
