# [System Harness & PRD] OSI Navigator Project

## 0. AI (Claude) Operating Instructions & Constraints (토큰 절약 및 추론 극대화)
- **Response Efficiency**: 불필요한 인사말, 칭찬, 반복 설명은 생략하고 **코드와 기술적 분석 위주**로 간결하게 답변할 것.
- **Incremental Development**: 모든 코드를 한 번에 출력하지 말고, 모듈 단위(예: HTML 뼈대 -> CSS 디자인 -> JS 로직)로 나누어 작성할 것.
- **State Tracking**: 답변의 마지막에는 항상 `[Current Progress: 완료된 작업 / Next Step: 다음 작업]` 형태로 현재 상태를 요약하여 컨텍스트 유실을 방지할 것.

---

## 1. Product Requirement Document (PRD)

### 개요
OSI Navigator는 OSI 7계층 이론 학습과 인터랙티브 실습(게임)을 결합한 웹 기반 학습 플랫폼입니다. Flexbox Froggy와 같이 사용자가 직접 문제를 해결하며 네트워크 프로토콜의 동작 원리를 익히도록 설계되었습니다.

### 핵심 기능
- **이론 학습 모드**: 7계층별 정의, PDU, 역할 상세 설명.
- **인터랙티브 실습 모드 (Game)**: 계층별 미션 수행 (예: 캡슐화 순서 맞추기, 올바른 프로토콜 선택하기).
- **시각화 시스템**: 데이터가 각 계층을 통과하는 애니메이션 구현.

### 사용자 흐름 (User Flow)
1. 메인 페이지 접속 -> 계층 선택.
2. 선택된 계층의 이론 학습 (읽기/보기).
3. '실습 시작' 클릭 -> 미션 화면 진입.
4. 미션 해결 시 다음 계층으로 이동.

### 기술 스택
- HTML5, CSS3, Vanilla JavaScript

---

## 2. README.md Template

# OSI Navigator
> "네트워크의 복잡한 층을 탐색하는 나침반, OSI Navigator"

OSI 7계층의 구조와 각 계층별 데이터 통신 방법을 배우고, 직접 문제를 풀며 실력을 다지는 인터랙티브 학습 사이트입니다.

## 🛠 Features
- **Interactive Learning**: 개념 학습과 미니 게임의 결합.
- **Visualized Data**: 계층 통신 흐름 시각화.
- **Gamification**: Flexbox Froggy 스타일의 문제 해결 방식.

## 📁 Project Structure
```text
osi-navigator/
├── index.html          # 메인 대시보드
├── learn.html          # 이론 학습 페이지
├── play.html           # 실습/문제 풀이 페이지
├── css/
│   ├── style.css
│   └── game.css
├── js/
│   ├── data.json       # 학습 및 문제 데이터셋
│   └── game.js         # 인터랙션 로직
└── README.md
```

## 🚀 Getting Started
1. 이 레포지토리를 클론합니다.
2. `index.html`을 브라우저에서 엽니다.

---

## 3. 개발 규칙 및 커밋 컨벤션 (Conventional Commits)
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `style`: 코드 스타일 수정
- `docs`: 문서 수정
- `refactor`: 코드 리팩토링

예시: `feat: add layer 3 packet routing logic`
