import React, { useState } from "react";
import "./MyPage.css";

export default function MyPage() {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: "최정원",
    id: "ID",
    major: "학과",
    year: "학년",
    email: "이메일",
    intro: "소개글...............................",
  });
  const [tempProfile, setTempProfile] = useState(profile);

  const handleEdit = () => {
    setTempProfile(profile);
    setEdit(true);
  };

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setEdit(false);
  };

  return (
    <div className="mypage-container">
      <div className="mypage-logo-title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Logo_of_Yeonam_Institute_of_Technology.png"
          alt="연암공과대학교"
          className="mypage-logo"
        />
        <div className="mypage-title">마이페이지</div>
      </div>
      <div className="mypage-profile-box">
        <div className="mypage-profile-left">
          <div className="mypage-profile-img">👤</div>
          <div className="mypage-profile-name">{profile.name}</div>
          <div className="mypage-profile-id">{profile.id}</div>
        </div>
        <div className="mypage-profile-right">
          <div className="mypage-info-row">
            <div className="mypage-label">학과</div>
            {edit ? (
              <input name="major" value={tempProfile.major} onChange={handleChange} />
            ) : (
              <div className="mypage-value">{profile.major}</div>
            )}
          </div>
          <div className="mypage-info-row">
            <div className="mypage-label">학년</div>
            {edit ? (
              <input name="year" value={tempProfile.year} onChange={handleChange} />
            ) : (
              <div className="mypage-value">{profile.year}</div>
            )}
          </div>
          <div className="mypage-info-row">
            <div className="mypage-label">이메일</div>
            {edit ? (
              <input name="email" value={tempProfile.email} onChange={handleChange} />
            ) : (
              <div className="mypage-value">{profile.email}</div>
            )}
          </div>
          <div className="mypage-info-row">
            <div className="mypage-label">소개글</div>
            {edit ? (
              <input name="intro" value={tempProfile.intro} onChange={handleChange} style={{ width: "250px" }} />
            ) : (
              <div className="mypage-value">{profile.intro}</div>
            )}
          </div>
        </div>
        <div className="mypage-edit-btns">
          {edit ? (
            <button className="mypage-save-btn" onClick={handleSave}>저장</button>
          ) : (
            <button className="mypage-edit-btn" onClick={handleEdit}>수정</button>
          )}
        </div>
      </div>
      <button
  className="mypage-portfolio-btn"
  onClick={() => window.location.href = "https://naver.com"}
>
  포트폴리오 페이지
</button>
    </div>
  );
}