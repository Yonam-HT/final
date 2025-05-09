import React from 'react';

function BoardProgress() {
  const tasks = [
    { id: 1, title: '업무1', status: '진행중' },
    { id: 2, title: '업무2', status: '완료' },
  ];

  return (
    <div style={{ padding: 32 }}>
      <h2>업무 진척도</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>업무명</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td style={{ color: task.status === '완료' ? 'green' : 'blue' }}>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardProgress;