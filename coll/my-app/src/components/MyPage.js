import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 32 }}>
      <h2>마이페이지</h2>
      <button
        onClick={() => navigate('/portfolio')}
        style={{ marginBottom: 16, marginRight: 8 }}
      >
        포트폴리오 바로가기
      </button>
      <button
        onClick={() => navigate('/profile')}
        style={{ marginBottom: 16 }}
      >
        프로필 보기
      </button>
      <div>
        <h3>내 게시글/댓글</h3>
        <p>최근 활동 내역이 여기에 표시됩니다.</p>
      </div>
    </div>
  );
}

export default MyPage;