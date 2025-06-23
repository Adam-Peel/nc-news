import ArticlesFeed from "../components/ArticlesFeed";
import CommentsFeed from "../components/CommentsFeed";

function UserPage() {
  return (
    <main>
      <nav>
        <h2>Search bar component here</h2>
      </nav>
      <ArticlesFeed />
      <CommentsFeed />
    </main>
  );
}

export default UserPage;
