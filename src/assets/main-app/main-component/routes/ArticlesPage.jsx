import { useState, useEffect } from "react";
import ArticlesFeed from "../components/ArticlesFeed";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import Header from "../../Header";

function ArticlesPage() {
  const { topic } = useParams();
  const [searchParams] = useSearchParams();
  const [keywordString, setKeywordString] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const keywords = searchParams.get("keywords");
    setKeywordString(keywords);
    console.log(location.search);
  }, [location.search, topic, searchParams]);

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
