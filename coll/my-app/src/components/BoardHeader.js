import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BoardHeader() {
  const navigate = useNavigate();

  // 타임라인 리스트를 상태로 관리
  const [timeline, setTimeline] = useState([
    { date: '25.05.15', type: 'SW', text: '프론트엔드 개발', checked: true },
    { date: '25.05.14', type: 'SW', text: '백엔드 개발', checked: true },
    { date: '25.05.13', type: 'SW', text: '깃허브 관리', checked: true },
    { date: '25.05.12', type: 'SW', text: '명세서 작성', checked: true },
    { date: '25.05.11', type: 'SW', text: '문서 작성', checked: true },
    { date: '25.05.10', type: 'SW', text: '요구사항 분석', checked: true }
  ]);
  const [editMode, setEditMode] = useState(false);

  // 체크 토글 함수
  const toggleCheck = (idx) => {
    setTimeline(tl =>
      tl.map((item, i) =>
        i === idx ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // 체크된 개수와 전체 개수
  const checkedCount = timeline.filter(item => item.checked).length;
  const totalCount = timeline.length;
  const colors = ['#ffb3b3', '#ff9999', '#ff7f7f', '#ff6666', '#ff4d4d', '#ff3333'];

  return (
    <div>
      {/* 상단 붉은색 배경 영역 */}
      <div style={{
        width: '100%',
        height: '60px',
        background: '#e6002d',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* 왼쪽 위 로고 */}
        <img
          src="/yonam_logo.png"
          alt="연암공과대학교 로고"
          style={{
          
            height: '40px',
            marginLeft: '24px'
          }}
        />
        <div
          style={{
            color: '#fff',
            fontSize: '40px'
          }}>
          <p style ={{
          fontSize: '20px'
          }}>
          연암공과대학교<br />
          humen-tech
          </p>


        </div>
        <button
          onClick={() => navigate('/board/write')}
          style={{
            position: 'absolute', top: '20px', right: '140px',
            marginLeft: '620px',
            padding: '8px 16px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          게시글 작성
        </button>
        <button
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 16px',
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          onClick={() => navigate('/mypage')}
        >
          내 정보
        </button>
      </div >

      <div style={{
        marginLeft: '40px', // 왼쪽에서 40px 띄움
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row'
      }} >
        <div style={{
          width: '600px',
          height: '500px',
          marginLeft: '40px',
          marginTop: '40px'
        }}>
          <h2> 프로젝트 이름</h2>
          닉네임: 홍길동<br />
          <img src="/yonam_logo.png" alt="연암공과대학교 로고" style={{
            width: '300px',
            height: '200px'
          }} />
          <br />
          <p>
            프로젝트내용 프로젝트내용 프로젝트 내용<br />
            프로젝트내용 프로젝트내용 프로젝트 내용<br />
            프로젝트내용  프로젝트내용  프로젝트 내용
          </p>
        </div>

        <div>
          <h2>프로젝트 타임라인 </h2>

          {/* 막대그래프: 체크된 개수만큼 채워짐 */}
          <div style={{ width: '320px', margin: '40px auto 0 auto' }}>
            <div style={{
              display: 'flex',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              {Array.from({ length: totalCount }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: '32px',
                    background: i < checkedCount ? (colors[i] || colors[colors.length - 1]) : '#fff'
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '14px' }}>10</span>
              <span style={{ fontSize: '14px' }}>100</span>
            </div>
          </div>

          <div style={{ width: '340px', margin: '40px auto 0 auto' }}>
            {timeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #222',
                  borderRadius: '6px',
                  padding: '10px 16px',
                  marginBottom: '12px',
                  background: '#fff'
                }}
              >
                <span style={{ width: '80px', fontSize: '15px' }}>{item.date}</span>
                <span style={{ width: '90px', fontSize: '15px', color: '#888' }}>{`<${item.type}>`}</span>
                <span style={{ flex: 1, fontSize: '15px' }}>{item.text}</span>
                {editMode ? (
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleCheck(idx)}
                    style={{ width: '20px', height: '20px', marginLeft: '10px' }}
                  />
                ) : (
                  item.checked && (
                    <span style={{ color: '#1abc1a', fontSize: '20px', marginLeft: '10px', marginRight: '8px' }}>✔</span>
                  )
                )}
              </div>
            ))}
          
</div>
          <div style={{ width: '320px', marginRight: '80px' }}>
            <br />
            <button onClick={() => setEditMode(!editMode)}>
              {editMode ? '수정 완료' : '수정'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BoardHeader;