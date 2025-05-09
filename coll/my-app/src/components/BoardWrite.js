import React, { useState } from 'react';

function BoardWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [recruitment, setRecruitment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('게시글이 등록되었습니다!');
  };
 
  return (
    <div>
      {/* 상단 붉은색 배경 + 왼쪽 로고 */}
      <div
        style={{
          width: '100%',
          height: '60px',
          background: '#e6002d',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        {/* 왼쪽 상단 이미지 */}
        <img
          src="/yonam_logo.png" // 이미지 경로에 맞게 수정
          alt="연암공과대학교 로고"
          style={{
            height: '40px',
            marginLeft: '24px'
          }}
        />
        {/* 가운데 텍스트 */}
        <span
          style={{
            color: '#fff',
            fontSize: '1.7rem',
            fontWeight: 'bold',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          게시글 작성
        </span>
      </div>

      {/* 기존 내용 */}
      <div style={{ padding: 32 }}>
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
          <div>
            <input
              type="number"
              placeholder="모집인원"
              value={recruitment}
              onChange={e => setRecruitment(e.target.value)}
              style={{ width: '100%', padding: 8, marginBottom: 12 }}
              required
            />
          </div>
          <button type="submit" style={{ padding: 10, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>
            등록
          </button>
        </form>
      </div>
    </div>
  );
}

export default BoardWrite;