//Components
import ArticlesPage from "./main-component/routes/ArticlesPage";
import Sidebar from "./main-component/Sidebar";
import SingleArticlePage from "./main-component/routes/SingleArticlePage";
import { Routes, Route } from "react-router";
import NotFound from "./main-component/routes/NotFound";
import BadRequest from "./main-component/routes/BadRequest";
import ServerError from "./main-component/routes/ServerError";

function MainComponent() {
  return (
    <>
      <Sidebar />
      {/* Routing here for different pages - use API REQUEST*/}
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/topics/:topic" element={<ArticlesPage />} />
        <Route path="/topic/:topic" element={<ArticlesPage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/400" element={<BadRequest />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainComponent;
