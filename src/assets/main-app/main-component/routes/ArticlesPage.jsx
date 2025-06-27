import ArticlesFeed from "../components/ArticlesFeed";
import { useParams } from "react-router";

function ArticlesPage() {
  const { topic } = useParams();
  console.log(topic);

  return (
    <>
      <ArticlesFeed title="All posts" url={"?topic="} topicChange={topic} />
    </>
  );
}

export default ArticlesPage;
