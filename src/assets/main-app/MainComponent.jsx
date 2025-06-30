//Components
import ArticlesPage from "./main-component/routes/ArticlesPage";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router";
import NotFound from "./main-component/routes/NotFound";

function MainComponent() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/topics/:topic" element={<ArticlesPage />} />
        <Route path="/topic/:topic" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="/articles/search" element={<ArticlesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainComponent;
