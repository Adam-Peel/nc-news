import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    const title = topic[0].toUpperCase();
    return (
      <>
        <main>
          <SearchBar />
          <h2>
            <span className="article-start-accent">{title}</span>
            <span className="article-start-accent">{topic.slice(1)}</span>
          </h2>
          <ArticlesFeed url={`?topic=${topic}`} />
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <SearchBar />
          <ArticlesFeed url={""} />
        </main>
      </>
    );
  }
}

export default ArticlesPage;
