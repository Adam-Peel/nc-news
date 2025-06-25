//Utils
import fetchData from "./main-component/utils/fetch";
//Components
import ArticlesPage from "./main-component/routes/ArticlesPage";
import UserPage from "./main-component/routes/UserPage";
import Sidebar from "./main-component/Sidebar";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router";
import { useState } from "react";

function MainComponent() {
  return (
    <>
      <Sidebar />
      {/* Routing here for different pages - use API REQUEST*/}
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
      </Routes>
    </>
  );
}

export default MainComponent;
