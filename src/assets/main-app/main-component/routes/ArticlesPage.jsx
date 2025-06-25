import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();
  return (
    <>
      <main>
        <SearchBar />
        <ArticlesFeed url={`?topic=${topic}`} />
      </main>
    </>
  );
}

export default ArticlesPage;
