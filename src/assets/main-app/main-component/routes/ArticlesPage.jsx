import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    const title = topic[0].toUpperCase() + topic.slice(1);
    return (
      <>
        <ArticlesFeed
          title={title}
          url={`?topic=${topic}`}
          topicChange={topic}
        />
      </>
    );
  } else {
    return (
      <>
        <ArticlesFeed title="All posts" url={""} />
      </>
    );
  }
}

export default ArticlesPage;
