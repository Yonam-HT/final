import React from 'react';

function BoardList() {
  const posts = [
    { id: 1, title: '첫 번째 게시글', author: '홍길동', date: '2024-06-01', views: 10 },
    { id: 2, title: '두 번째 게시글', author: '김철수', date: '2024-06-02', views: 5 },
  ];

  return (
    <div style={{ padding: 32 }}>
      <h2>게시글 목록</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardList;