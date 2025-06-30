import { useState, useEffect } from "react";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams, useSearchParams, useLocation } from "react-router";
import Header from "../../Header";

function ArticlesPage() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const [keywordString, setKeywordString] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const keywords = searchParams.get("keywords");
    setKeywordString(keywords);
  }, [location.search, topic]);

  if (topic) {
    return (
      <>
        <Header />
        <ArticlesFeed
          title={topic || "all-posts"}
          url={`?topic=${topic}`}
          topicChange={topic}
        />
      </>
    );
  }

  if (keywordString) {
    return (
      <>
        <Header />
        <ArticlesFeed
          title={`all-posts related to ${keywordString}`}
          url={`/search?keywords=${keywordString}`}
          topicChange={null}
        />
      </>
    );
  }

  return (
    <>
      <Header />
      <ArticlesFeed title={"all-posts"} url={"?topic="} />
    </>
  );
}

export default ArticlesPage;
