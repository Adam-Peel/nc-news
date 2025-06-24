import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ArticlesFeed from "../components/ArticlesFeed";

function ArticlesPage({ awaitingAPI, baseURL, setAwaitingAPI }) {
  return (
    <>
      <main>
        <SearchBar />
        <ArticlesFeed
          awaitingAPI={awaitingAPI}
          baseURL={baseURL}
          setAwaitingAPI={setAwaitingAPI}
        />
      </main>
    </>
  );
}

export default ArticlesPage;
