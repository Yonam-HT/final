import React from 'react';
import { useNavigate } from 'react-router-dom';

function BoardHeader() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 32, position: 'relative' }}>
      {/* 우측 상단 '내 정보' 버튼 */}
      <button
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          padding: '8px 16px',
          background: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
        onClick={() => navigate('/mypage')}
      >
        내 정보
      </button>
    
      <div style={{ marginBottom: 16 }} >
        <button onClick={() => navigate('/board/list') } style={{marginRight:260 ,marginleft:260}}>게시글 목록</button>
        <button onClick={() => navigate('/board/write')} >게시글 작성</button>
      </div>
      <input type="text" placeholder="게시글 검색" style={{ width: 200, padding: 8 }} />
    </div>
  );
}

export default BoardHeader;