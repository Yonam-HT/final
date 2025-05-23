1. 개요
	1. 기획
	2. 기획 목적(이유)
	3. 기대 효과
2. 기능 요건
	1. 기능 요구사항 정리 및 시나리오 작성
	2. 비즈니스 규칙 작성
	3. 요구사항 설계 방법(기법 정하기)
3. 내부/외부 설계 기능
	1. WBS
4. 추후 기능

# 1. 개요

## 1.1 기획
- 연암공과대학교의 전체 과 통합 프로젝트 팀 모집 시스템
	- 일반 외주 사이트와 달리 우리 학교 학생들만의 팀 프로젝트 모집 가능
	- 다른 과들과 쉽게 협업 가능
	- 개인 포트폴리오 홍보 가능
	- 실시간 랭킹 시스템으로 학생들간의 동기 부여

## 1.2 기획 목적
- 다른 과들과 교류하기 어려움
	- 개인적인 연줄이 있지 않으면 협업하여 프로젝트를 진행하기 어려움
- 연암공대 학생들의 개인 포트폴리오 홍보 기회 제공
- 프로젝트의 전체적인 진척도를 한눈에 파악하기 힘듦
	- 소프트웨어는 깃허브 등으로 명확하게 파악할수 있지만, 하드웨어 부문과 함께 제작시 한눈에 파악 어려움
	- 이를 진척도 바로 모든 사용자가 한눈에 파악 가능

## 1.3 기대 효과
- 연줄에 의존하지 않고도 모든 과 학생들이 자유롭게 협업할수 있음.
- 다른과들의 협업으로 서로의 한게점 보안 가능
	- ex_) 기계과 + 스소과 = 서로의 부족한 부분을 보안할수 있음.
	  자동차 하드웨어 + AI 시스템 = 자율주행 자동차 제작
- 학생들 개개인의 포트폴리오 홍보 가능
- 진척도 바를 통해 하드웨어, 소프트웨어의 진행도를 모두 한눈에 파악 가능

# 2. 기능 요건

1. 로그인 / 회원가입 페이지
2. 게시물 조회(메인페이지)
	1. 업무 진척도 바
3. 게시물 작성
4. 랭킹 페이지
5. 개인 페이지겸 마이페이지
6. 포트폴리오 페이지

## 2.1 유스케이스 작성(시나리오)
1. 로그인/회원가입 페이지

| 작성자      | 조소영                                            |
| -------- | ---------------------------------------------- |
| 작성일      | 2025.05.10                                     |
| 유스케이스 이름 | 로그인/회원가입 시도                                    |
| 사전 조건    | 우리학교 학생이라는 가정 하에 로그인 실시                        |
| 주요 시나리오  | 1. 아이디/비밀번호를 입력<br>2. 로그인 버튼 클릭                |
| 확장시나리오   | 2-1. 학생 정보가 일치하지 않으면 "로그인 정보가 없습니다." 팝업 메세지 출력 |
| 성공시 보증   | 다음 화면(메인화면)으로 전환                               |

2. 게시물 조회(메인페이지)

| 작성자      | 조소영                                                                                                                                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 작성일      | 2025.05.10                                                                                                                                                                                                      |
| 유스케이스 이름 | 게시물 조회 페이지 이용                                                                                                                                                                                                   |
| 사전 조건    | 로그인 성공 후 메인페이지 정상 진입을 전제로 함                                                                                                                                                                                     |
| 주요 시나리오  | 1. 게시물 상단에 과 별로 프로젝트를 조회 가능.<br>2. 프로젝트의 제목과 상세 내용, 날짜, 프로젝트 생성인, 모집 인원 현황을 볼 수있음.<br>3. 프로젝트의 이미지 클릭시 해당 프로젝트 상세 페이지로 이동                                                                                       |
| 확장시나리오   | 1-1. 네비게이션 바에 과 별로 이동 가능. 해당 과의 프로젝트 혹은 협업과 관련된 모든 프로젝트를 볼수 있음.<br>1-2. "필터" 버튼 클릭시 '모집중' 또는 '모집완료' 프로젝트를 구분해서 볼수 있음.(모집중인 프로젝트는 위에 정렬, 모집 완료 프로젝트는 아래로 정렬)<br>2-1. 지정된 특정 이미지 없을 시 연암공대 기본 마크로 표시(정상적으로 이동 가능) |
| 성공시 보증   | 업무 진척도 페이지로 이동                                                                                                                                                                                                  |

2.1 업무 진척도 BAR

| 작성자      | 조소영                                                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 작성일      | 2025.05.10                                                                                                                                       |
| 유스케이스 이름 | 프로젝트 상세 보기                                                                                                                                       |
| 사전 조건    | 2번 과정 정상 진행 완료 전제                                                                                                                                |
| 주요 시나리오  | 1. 전체 진척도 를 바 형태로 한눈에 파악 가능<br>2. 스크롤을 내리면 stack 형식으로 최신 정보가 맨 위에 표시됨.<br>3. 최신 정보는 날짜, 파트명, 짧은 설명란, 사진 또는 동영상으로 구성됨.<br>4. 마우스를 가져다대면 크게 볼수 있음. |
| 확장시나리오   | 2.2 참조                                                                                                                                           |
| 성공시 보증   | 업무 진척도 페이지로 정상 이동                                                                                                                                |

2.2 업무 진척도 BAR(2)

| 작성자      | 조소영                                                                                                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------- |
| 작성일      | 2025.05.                                                                                                                  |
| 유스케이스 이름 | 프로젝트 상세보기 수정                                                                                                              |
| 사전 조건    | 프로젝트관리자들만(권한이 있는 사용자만) "수정" 버튼을 클릭할수                                                                                      |
| 주요 시나 리오 | 1. 진척도 그래프를 체크리스트 체킹으로 0~10단계 자동 조정 가능<br>2. 진척도 그래프 밑에 있는 상세 투두리스트 수정 및 추가 가능<br>3. 필요에 따라 사진, 동영상도 추가 가능하다.|
| 확장시나리오   |                                                                                                                           |
| 성공시 보증   | 프로젝트 진척                                                                                                                   |

3. 게시물 작성

| 작성자      | 조소영                                                                             |
| -------- | ------------------------------------------------------------------------------- |
| 작성일      | 2025.05.10                                                                      |
| 유스케이스 이름 | 프로젝트 게시글 작성                                                                     |
| 사전 조건    | 로그인에 성공했다는 전제.                                                                  |
| 주요 시나리오  | 1. 오른쪽 상단, "새 글 작성" 버튼 클릭<br>2. "프로젝트 제목", "프로젝트 내용", "모집 인원" 작성<br>3. 저장 버튼 클릭 |
| 확장시나리오   | 3-1. "뒤로가기" 버튼 클릭시 "변경된 내용이 저장되지 않습니다." 팝업 출력. -> "예/아니오" 선택 가능                 |
| 성공시 보증   | 페이지가 정상적으로 보임                                                                   |


4. 랭킹 페이지

| 작성자      | 조소영                                                                                |
| -------- | ---------------------------------------------------------------------------------- |
| 작성일      | 2025.05.10                                                                         |
| 유스케이스 이름 | 랭킹 확인 및 개인 포트폴리오 조회                                                                |
| 사전 조건    | 로그인에 성공했다는 전제.                                                                     |
| 주요 시나리오  | 1. 사용자가 좌측 사이드 바에서 랭커 현황 확인<br>2. 랭킹 프로필 클릭<br>3. 해당 랭커의 포트폴리오 상세 페이지(새로운 페이지)로 이동 |
| 확장시나리오   | 3-1. 참여한 프로젝트가 없는경우 "프로젝트 없음"이라는 글자 표시                                             |
| 성공시 보증   | 페이지가 정상적으로 보임                                                                      |

5. 개인 페이지겸 마이페이지

| 작성자      | 조소영                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------ |
| 작성일      | 2025.05.10                                                                                                               |
| 유스케이스 이름 | 개인 페이지 조회(마이페이지)                                                                                                         |
| 사전 조건    | 로그인에 성공했다는 전제.                                                                                                           |
| 주요 시나리오  | 1. 우측 상단 본인의 닉네임 클릭<br>2. 자신의 개인 페이지로 이동(새창)<br>3. "수정" 버튼 클릭시 학생 정보 수정 가능<br>4. 프로필 밑에 "포트폴리오" 버튼 클릭시 자신의 포트폴리오 페이지로 이동 |
| 확장시나리오   | 3-1. 참여한 프로젝트가 없는경우 "프로젝트 없음"이라는 글자 표시<br>4-1. 포트폴리오 페이지에서 자신의 포트폴리오 수정 작업 가능.(6번참조)                                     |
| 성공시 보증   | 페이지가 정상적으로 보임                                                                                                            |


6. 포트폴리오 페이지

| 작성자      | 조소영                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| 작성일      | 2025.05.10                                                                                                                  |
| 유스케이스 이름 | 자신의 포트폴리오 페이지 수정 기능                                                                                                         |
| 사전 조건    | 로그인에 성공했다는 전제.                                                                                                              |
| 주요 시나리오  | 1. 5번의 "포트폴리오" 버튼을 클릭한 후 새 창이 열림.<br>2. 포트폴리오의 프로젝트별로 수정 가능<br>3. 프로젝트 추가, 삭제, 제목 및 글, 사진 등 수정 가능<br>4. 맨 아래 "완료" 버튼 클릭시 저장 |
| 확장시나리오   | 4-1. 뒤로가기 클릭시 변경사항 저장X                                                                                                      |
| 성공시 보증   | 페이지가 정상적으로 보임                                                                                                               |

# 3. 내/외부 설계 기능(WBS)

<img width="729" alt="스크린샷 2025-05-10 오전 5 54 04" src="https://github.com/user-attachments/assets/70dcfff7-635b-45d3-8b11-5e62dcdb1193" />



# 4. 추후 기능
1. DB 이용하여 회원가입 및 회원 관리 시스템 추가
