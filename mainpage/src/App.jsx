import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// 더미 데이터

const posts = [
  { id: 1, title: "프로젝트 제목1", content: "기계과 프로젝트입니다.", major: ["기계"], status: "모집중", current: 2, total: 5 },
  { id: 2, title: "프로젝트 제목2", content: "전기과 프로젝트입니다.", major: ["전기"], status: "모집완료" },
  { id: 3, title: "프로젝트 제목3", content: "스기과 프로젝트입니다.", major: ["스기"], status: "모집중", current: 4, total: 6 },
  { id: 4, title: "프로젝트 제목4", content: "스전과 프로젝트입니다.", major: ["스전"], status: "모집완료" },
  { id: 5, title: "프로젝트 제목5", content: "스소과 프로젝트입니다.", major: ["스소"], status: "모집중", current: 1, total: 3 },
  { id: 6, title: "프로젝트 제목6", content: "기계, 전기 협업 프로젝트입니다.", major: ["기계", "전기"], status: "모집중", current: 3, total: 5 },
  { id: 7, title: "프로젝트 제목7", content: "스기, 스전 협업 프로젝트입니다.", major: ["스기", "스전"], status: "모집완료" },
];

const users = [
  { id: 1, name: "닉네임1", projectCount: 7 },
  { id: 2, name: "닉네임2", projectCount: 6 },
  { id: 3, name: "닉네임3", projectCount: 6 },
  { id: 4, name: "닉네임4", projectCount: 5 },
  { id: 5, name: "닉네임5", projectCount: 5 },
  { id: 6, name: "닉네임6", projectCount: 4 },
  { id: 7, name: "닉네임7", projectCount: 4 },
  { id: 8, name: "닉네임8", projectCount: 3 },
  { id: 9, name: "닉네임9", projectCount: 3 },
  { id: 10, name: "닉네임10", projectCount: 2 },
];

// 유저 상세 페이지 컴포넌트 (간단 예시)
function UserPage({ name }) {
  return (
    <div style={{ padding: 40 }}>
      <h2>{name}님의 페이지</h2>
      <p>여기에 유저 상세 정보를 넣으세요.</p>
    </div>
  );
}

// 왼쪽 랭킹 컴포넌트
function Ranking({ users }) {
  const navigate = useNavigate();

  return (
    <aside style={{ width: 220, background: "#222", padding: 20, color: "#fff" }}>
      <h2 style={{ color: "#fff" }}>TOP10</h2>
      {/* 1등만 크게 */}
      <button
        onClick={() => navigate(`/user/${users[0].name}`)}
        style={{
          width: "100%",
          background: "#fff",
          color: "#222",
          border: "none",
          borderRadius: 16,
          marginBottom: 20,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: 20,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 10 }}
        />
        <span>{users[0].name}</span>
        <span style={{ fontSize: 16, color: "#888" }}>프로젝트: {users[0].projectCount}개</span>
      </button>
      {/* 2~10등 버튼 */}
      {users.slice(1).map((user, idx) => (
        <button
          key={user.id}
          onClick={() => navigate(`/user/${user.name}`)}
          style={{
            width: "100%",
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            marginBottom: 10,
            padding: "10px 0",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{idx + 2}위 {user.name}</span>
          <span style={{ fontSize: 14, color: "#bbb" }}>{user.projectCount}개</span>
        </button>
      ))}
    </aside>
  );
}

// 메인 페이지
function MainPage({ posts, users }) {
  const [selectedMajor, setSelectedMajor] = useState("전체");

  const filteredPosts =
    selectedMajor === "전체"
      ? posts
      : selectedMajor === "협업"
        ? posts.filter((post) => post.major.length > 1)
        : posts.filter((post) => post.major.length === 1 && post.major[0] === selectedMajor);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Ranking users={users} />
      <div style={{ flex: 1, padding: 20 }}>
        {/* 상단 필터 버튼 */}
        <div style={{ marginBottom: 20 }}>
          {["전체", "기계", "전기", "스기", "스전", "스소", "협업"].map((major) => (
            <button
              key={major}
              onClick={() => setSelectedMajor(major)}
              style={{
                marginRight: 10,
                background: selectedMajor === major ? "#f00" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {major}
            </button>
          ))}
          
        </div>
        {/* 게시물 목록 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
  {filteredPosts.map((post) => (
    <div
      key={post.id}
      style={{
        width: 200,
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        background: "#fff",
        position: "relative",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <span style={{ fontSize: 12, color: "#888" }}>
        {post.major.join(", ")}
      </span>
      <div style={{ height: 24 }} />
      {/* 모집 상태 표시 */}
      {post.status === "모집중" ? (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 16,
            background: "#27ae60",
            color: "#fff",
            borderRadius: 12,
            fontSize: 12,
            padding: "2px 10px",
            display: "inline-block",
          }}
        >
          {post.current}/{post.total}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 16,
            background: "#ff7675",
            color: "#222",
            borderRadius: 12,
            fontSize: 12,
            padding: "2px 10px",
            display: "inline-block",
          }}
        >
          모집완료
        </div>
      )}
    </div>
  ))}
</div>
        
      </div>
    </div>
  );
}

// 라우터 적용
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage posts={posts} users={users} />} />
        <Route
          path="/user/:name"
          element={
            <UserPageWrapper />
          }
        />
      </Routes>
    </Router>
  );
}

// useParams로 유저 이름 받아오기 위한 래퍼
import { useParams } from "react-router-dom";
function UserPageWrapper() {
  const { name } = useParams();
  return <UserPage name={name} />;
}

export default App;