import React from "react";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-img">
        <img src="/logo.svg" alt="썸네일" />
      </div>
      <div className="post-title">{post.title}</div>
      <div className="post-meta">
        <span>작성자: {post.author}</span>
        <span>조회수: {post.views}</span>
      </div>
    </div>
  );
}

export default PostCard;