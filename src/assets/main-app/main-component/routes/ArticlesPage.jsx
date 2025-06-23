import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";

function ArticlesPage(articlesAPI) {
  return (
    <main>
      <SearchBar />
      <ArticlesFeed articlesAPI={articlesAPI} />
    </main>
  );
}

export default ArticlesPage;
