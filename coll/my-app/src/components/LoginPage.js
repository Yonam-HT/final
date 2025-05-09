import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === 'test' && pw === '1234') {
      navigate('/board');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 32, boxShadow: '0 0 10px #ccc', borderRadius: 8 }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 12 }}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            style={{ width: '100%', padding: 8, marginBottom: 12 }}
            required
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#b71c1c', color: '#fff', border: 'none', borderRadius: 4 }}>
          로그인
        </button>
      </form>
    </div>
  );
}

export default LoginPage;