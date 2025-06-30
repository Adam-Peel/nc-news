//Components
import ArticlesFeed from "./main-component/components/ArticlesFeed";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./main-component/routes/NotFound";

function MainComponent() {
  return (
    <>
      <Routes>
        <Route path="/articles" element={<ArticlesFeed />} />
        <Route path="/" element={<ArticlesFeed />} />
        <Route path="/topics/:topic" element={<ArticlesFeed />} />
        <Route path="/topic/:topic" element={<ArticlesFeed />} />
        <Route path="/articles/search" element={<ArticlesFeed />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainComponent;
