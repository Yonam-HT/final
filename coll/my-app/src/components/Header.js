import React from "react";

function Header() {
  const categories = [
    "SW",
    "전기전자",
    "기계",
    "스마트 기계",
    "스마트 전기전자",
    "협업"
  ];
  return (
    <div className="header">
      <div className="header-tabs">
        <button>게시물 작성</button>
        <button>게시물 조회</button>
        <button>내정보</button>
      </div>
      <div className="categories">
        {categories.map(cat => (
          <button className="category-btn" key={cat}>{cat}</button>
        ))}
      </div>
    </div>
  );
}

export default Header;