import ArticlesPage from "./main-component/routes/ArticlesPage";
import UserPage from "./main-component/routes/UserPage";
import Sidebar from "./main-component/Sidebar";
import { Routes, Route } from "react-router";
import SingleArticlePage from "./main/routes/SingleArticlePage";

function MainComponent(userId) {
  const [articlesAPI, setArticlesAPI] = useState("/api/articles");
  const [articleId, setArticleId] = useState(0);
  return (
    <>
      <Sidebar userId={userId} setArticlesAPI={setArticlesAPI} />
      {/* Routing here for different pages - use API REQUEST*/}
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/profile" element={<UserPage />} />
        <Route
          path="/article"
          element={<SingleArticlePage articleIf={articleId} />}
        />
      </Routes>
      <section>Main Page</section>
    </>
  );
}

export default MainComponent;
