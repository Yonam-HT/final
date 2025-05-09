import React from 'react';

function ProfilePage() {
  const user = {
    name: '홍길동',
    studentId: '20240001',
    major: '컴퓨터공학과',
    email: 'hong@univ.ac.kr'
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>개인 정보</h2>
      <ul>
        <li>이름: {user.name}</li>
        <li>학번: {user.studentId}</li>
        <li>학과: {user.major}</li>
        <li>이메일: {user.email}</li>
      </ul>
    </div>
  );
}

export default ProfilePage;