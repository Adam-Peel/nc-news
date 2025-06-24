import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";

function ArticlesPage({ baseURL }) {
  console.log(baseURL);
  return (
    <>
      <main>
        <SearchBar />
        <ArticlesFeed baseURL={baseURL} />
      </main>
    </>
  );
}

export default ArticlesPage;
