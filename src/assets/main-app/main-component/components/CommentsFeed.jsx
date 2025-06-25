import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import UserInteractionBox from "./UserInteractionBox";
import fetchData from "../utils/fetch";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

function CommentsFeed({ articleId, articleVotes, articleCommentCount }) {
  const [commentsData, setCommentsData] = useState(null);
  const [commentsError, setCommentsError] = useState(null);
  const [commentPosted, setCommentPosted] = useState(false);

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
  }, [articleId, commentPosted]);

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
        <Stack spacing={1}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={60}
            sx={{ bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ bgcolor: "#ffffde" }}
          />
          <Skeleton
            variant="rounded"
            width={210}
            height={60}
            sx={{ bgcolor: "#ffffde" }}
          />
        </Stack>
      </main>
    );
  }

  return (
    <section className="comments-feed">
      <UserInteractionBox
        articleId={articleId}
        articleVotes={articleVotes}
        articleCommentCount={articleCommentCount}
      />
      <CommentForm articleId={articleId} setCommentPosted={setCommentPosted} />
      <h2 className="comments-feed-title">Comments</h2>
      {commentsData.comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
}

export default CommentsFeed;
