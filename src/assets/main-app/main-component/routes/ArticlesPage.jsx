import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();

  if (topic) {
    return (
      <>
        <main>
          <SearchBar />
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
