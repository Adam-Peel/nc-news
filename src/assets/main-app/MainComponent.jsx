//Utils
import fetchData from "./main-component/utils/fetch";
//Components
import ArticlesPage from "./main-component/routes/ArticlesPage";
import UserPage from "./main-component/routes/UserPage";
import Sidebar from "./main-component/Sidebar";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

function MainComponent(userId) {
  const [baseURL, setBaseURL] = useState(
    "https://news-aggregator-7e9t.onrender.com/api/articles"
  );
  const [awaitingAPI, setAwaitingAPI] = useState(true);
  const [articleId, setArticleId] = useState(0);

  return (
    <>
      <Sidebar userId={userId} setBaseURL={setBaseURL} />
      {/* Routing here for different pages - use API REQUEST*/}
      <Routes>
        <Route
          path="/"
          element={
            <ArticlesPage
              awaitingAPI={awaitingAPI}
              baseURL={baseURL}
              setAwaitingAPI={setAwaitingAPI}
            />
          }
        />
        <Route path="/profile" element={<UserPage />} />
        <Route
          path="/article"
          element={<SingleArticlePage articleId={articleId} />}
        />
      </Routes>
    </>
  );
}

export default MainComponent;
