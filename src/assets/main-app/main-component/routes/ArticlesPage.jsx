import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    return (
      <>
        <ArticlesFeed
          title={topic || "All posts"}
          url={`?topic=${topic}`}
          topicChange={topic}
        />
      </>
    );
  }

  return (
    <>
      <ArticlesFeed title={"All posts"} url={"?topic="} />
    </>
  );
}

export default ArticlesPage;
