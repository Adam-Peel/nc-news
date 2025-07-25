import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import UserInteractionBox from "./UserInteractionBox";
import fetchData from "../utils/fetch";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Badge from "@mui/material/Badge";
import CommentIcon from "@mui/icons-material/Comment";
import BadRequest from "../routes/BadRequest";

function CommentsFeed({ articleId, articleVotes, articleCommentCount }) {
  const [commentsData, setCommentsData] = useState(null);
  const [commentsError, setCommentsError] = useState(null);
  const [commentPosted, setCommentPosted] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    const fetchComments = async function () {
      try {
        const fetchedComments = await fetchData(
          `https://www.adampeel.co.uk/api/articles/${articleId}/comments`
        );
        setCommentsData(fetchedComments);
        setCommentsError(null);
        setErrorStatus(null);
      } catch (err) {
        setCommentsError(err.message);
        setCommentsData(null);
        setErrorStatus(err);
      }
    };
    fetchComments();
  }, [articleId, commentPosted]);

  if (commentsError) {
    console.log(commentsError);
    return <BadRequest error={error} />;
  }

  if (!commentsData) {
    return (
      <main>
        <h2 className="comments-feed-title">Loading...</h2>
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

      <h2 className="comments-feed-title">
        <Badge badgeContent={commentsData.comments.length} color="primary">
          <CommentIcon />
        </Badge>
        &emsp; Comments
      </h2>
      {commentsData.comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          setCommentPosted={setCommentPosted}
        />
      ))}
    </section>
  );
}

export default CommentsFeed;
