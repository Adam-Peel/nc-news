import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    const title = topic[0].toUpperCase() + topic.slice(1);
    return (
      <>
        <main>
          <SearchBar title={title} />
          <ArticlesFeed url={`?topic=${topic}`} topicChange={topic} />
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <SearchBar title="All posts" />
          <ArticlesFeed url={""} />
        </main>
      </>
    );
  }
}

export default ArticlesPage;
