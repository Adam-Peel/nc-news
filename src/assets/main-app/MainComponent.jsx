//Utils
import fetchData from "./main-component/utils/fetch";
//Components
import ArticlesPage from "./main-component/routes/ArticlesPage";
import UserPage from "./main-component/routes/UserPage";
import Sidebar from "./main-component/Sidebar";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router";
import { useState } from "react";

function MainComponent(userId) {
  const [baseURL, setBaseURL] = useState(
    "https://news-aggregator-7e9t.onrender.com/api/articles"
  );

  return (
    <>
      <Sidebar userId={userId} setBaseURL={setBaseURL} />
      {/* Routing here for different pages - use API REQUEST*/}
      <Routes>
        <Route path="/articles" element={<ArticlesPage baseURL={baseURL} />} />
        <Route path="/" element={<ArticlesPage baseURL={baseURL} />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
}

export default MainComponent;
