import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/logo.svg" alt="로고" className="logo" />
      <div className="profile">
        <div>프로필 사진?</div>
        <div>회원 1등 이름</div>
        <div>n 점 랭킹 or 멘트</div>
      </div>
      <ul className="side-info">
        <li>2 xxxxx</li>
        <li>~ yyyyy</li>
        <li>cccc</li>
        <li>15 66666</li>
      </ul>
    </div>
  );
}

export default Sidebar;