import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";

function ArticlesPage({ url }) {
  return (
    <>
      <main>
        <SearchBar />
        <ArticlesFeed url={url} />
      </main>
    </>
  );
}

export default ArticlesPage;
