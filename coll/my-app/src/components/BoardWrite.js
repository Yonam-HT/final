import React, { useState } from 'react';

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('게시글이 등록되었습니다!');
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 12 }}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="내용"
            value={content}
            onChange={e => setContent(e.target.value)}
            style={{ width: '100%', height: 120, padding: 8, marginBottom: 12 }}
            required
          />
        </div>
        <button type="submit" style={{ padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>
          등록
        </button>
      </form>
    </div>
  );
}

export default BoardWrite;