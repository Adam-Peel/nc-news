import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    const title = topic[0].toUpperCase() + topic.slice(1);
    return (
      <>
        <main>
          <ArticlesFeed
            title={title}
            url={`?topic=${topic}`}
            topicChange={topic}
          />
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <ArticlesFeed title="All posts" url={""} />
        </main>
      </>
    );
  }
}

export default ArticlesPage;
