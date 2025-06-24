import CommentCard from "./CommentCard";
import fetchData from "../utils/fetch";
import { useState, useEffect } from "react";

function CommentsFeed({ commentsData, articleId, articleCommentCount }) {
  return (
    <section className="comments-feed">
      {commentsData.map((comment) => (
        <CommentCard key={commentsData.id} comment={comment} />
      ))}
    </section>
  );
}

export default CommentsFeed;
