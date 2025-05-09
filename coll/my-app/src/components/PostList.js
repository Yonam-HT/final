import React from "react";
import PostCard from "./PostCard";

const dummyPosts = [
  { id: 1, title: "계획의 완성된 흐름도", author: "홍길동", views: 12 },
  { id: 2, title: "프로젝트 SW 개발 구상", author: "김철수", views: 8 },
  { id: 3, title: "제목", author: "이영희", views: 5 },
  { id: 4, title: "제목", author: "박민수", views: 7 },
  { id: 5, title: "제목", author: "최지우", views: 3 },
  { id: 6, title: "제목", author: "정수빈", views: 2 },
];

function PostList() {
  return (
    <div className="post-list">
      {dummyPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;