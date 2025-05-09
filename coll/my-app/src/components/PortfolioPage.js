import React from 'react';

function PortfolioPage() {
  const portfolios = [
    { id: 1, title: '웹 프로젝트', description: 'React로 만든 웹사이트' },
    { id: 2, title: '수상 경력', description: '2024 해커톤 대상' },
  ];

  return (
    <div style={{ padding: 32 }}>
      <h2>포트폴리오</h2>
      <ul>
        {portfolios.map(item => (
          <li key={item.id} style={{ marginBottom: 12 }}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioPage;