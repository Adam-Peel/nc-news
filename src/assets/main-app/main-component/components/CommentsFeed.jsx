import CommentCard from "./CommentCard";
import fetchData from "../utils/fetch";
import { useState, useEffect } from "react";

function CommentsFeed({ articleId }) {
  const [commentsData, setCommentsData] = useState(null);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    const fetchComments = async function () {
      try {
        const fetchedComments = await fetchData(
          `https://news-aggregator-7e9t.onrender.com/api/articles/${articleId}/comments`
        );
        setCommentsData(fetchedComments);
        setCommentsError(null);
      } catch (err) {
        setCommentsError(err.message);
        setCommentsData(null);
      }
    };
    fetchComments();
  }, [articleId]);

  if (commentsError) {
    console.log(commentsError);
    return (
      <main>
        <h3>Error</h3>
      </main>
    );
  }

  if (!commentsData) {
    return (
      <main>
        <h3>Loading comments...</h3>
      </main>
    );
  }

  return (
    <section className="comments-feed">
      <h2 className="comments-feed-title">Comments</h2>
      {commentsData.comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}

export default CommentsFeed;
