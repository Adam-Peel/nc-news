//Components
import ArticlesFeed from "./main-component/routes/ArticlesFeed";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import AboutPage from "./main-component/routes/About";
import { Routes, Route } from "react-router-dom";
import NotFound from "./main-component/routes/NotFound";

function MainComponent() {
  return (
    // <main>
    <Routes>
      <Route path="/nc-news/articles" element={<ArticlesFeed />} />
      <Route path="/nc-news" element={<ArticlesFeed />} />
      <Route path="/nc-news/topics/:topic" element={<ArticlesFeed />} />
      <Route path="/nc-news/topic/:topic" element={<ArticlesFeed />} />
      <Route path="/nc/news/articles/search" element={<ArticlesFeed />} />
      <Route
        path="/nc-news/articles/:article_id"
        element={<SingleArticlePage />}
      />
      <Route path="/nc-news/about" element={<AboutPage />} />
      <Route path="/nc-news/*" element={<NotFound />} />
    </Routes>
    // </main>
  );
}

export default MainComponent;
