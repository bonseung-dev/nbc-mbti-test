# MBTI Test App

![image](https://github.com/user-attachments/assets/532dbd6e-eba8-4c6d-9738-971b096cd4c8)
![image](https://github.com/user-attachments/assets/6d058403-59e7-4c96-b579-139f7c2d5fc9)
무료로 자신의 MBTI(성격 유형)를 테스트하고 결과를 확인할 수 있는 웹 애플리케이션입니다.  
이 프로젝트는 React와 Tailwind CSS를 기반으로 제작되었으며, JWT 인증, JSON 서버를 통한 데이터 관리, Axios 인스턴스 활용, 반응형 UI 구현 등 최신 웹 기술을 적용하였습니다.

## 목차

- [프로젝트 개요](#프로젝트-개요)
- [설치 및 실행](#설치-및-실행)
- [프로젝트 구조](#프로젝트-구조)
- [기술 스택](#기술-스택)
- [기능 구현 상세](#기능-구현-상세)

## 프로젝트 개요

이 애플리케이션은 사용자들이 무료로 자신의 MBTI를 테스트할 수 있도록 하며, 테스트 결과는 JSON 서버에 저장되어 언제든지 확인할 수 있습니다.  
또한, JWT 인증을 통해 사용자의 로그인 상태를 유지하고, 반응형 디자인을 적용하여 다양한 디바이스에서 최적의 사용자 경험을 제공합니다.

## 설치 및 실행

1. **프로젝트 클론 및 의존성 설치**

   ```bash
   git clone https://github.com/your-username/mbti-test-app.git
   cd mbti-test-app
   yarn install
   ```

## 프로젝트 구조

```
mbti-test-app/
├── public/ # 정적 파일 (예: index.html, 이미지 등)
├── src/
│ ├── api/ # API 호출 관련 파일 (auth.js, testResults.js 등)
│ ├── components/ # 재사용 가능한 컴포넌트 (TestResultItem 등)
│ ├── context/ # AuthContext 등 전역 상태 관리
│ ├── pages/ # 페이지 컴포넌트 (Home, Login, Register, Profile, TestForm, TestResultList 등)
│ ├── shared/ # Router 및 공통 레이아웃 관련 파일
│ ├── styles/ # Tailwind CSS 및 기타 스타일 파일
│ └── utils/ # 유틸리티 (MBTI 계산, 질문 데이터 등)
├── vercel.json # Vercel 배포 설정
└── package.json
```

## 기술 스택

- React
- React Router
- Tailwind CSS
- Axios
- JWT 인증
- JSON Server
- Vercel (배포)

## 기능 구현 상세

- Tailwind CSS 설치 및 설정:
  Tailwind 설정 파일 생성 후 index.css를 수정하여 글로벌 스타일을 설정.

- 로그인 및 회원가입 컴포넌트 작성:
  홈, 로그인, 회원가입, 프로필 페이지를 작성하고, 각 페이지에서 사용자 인증 기능을 구현.

- 라우터 설정:
  React Router를 사용하여 홈, 로그인, 회원가입, 프로필 페이지의 라우팅을 구성하고, ProtectedRoute와 Outlet을 활용해 비로그인 사용자의 접근을 제한.

- Layout 컴포넌트 작성:
  네비게이션 바, 로그아웃 버튼 등을 포함하는 기본 레이아웃을 구성.

- JWT 인증 API 연결:
  JWT 인증 서버 명세서를 참고하여 auth.js를 작성하고, 회원가입, 로그인, 프로필 변경 API를 테스트.

- MBTI 문항 및 테스트 로직 적용:
  제공된 questions.js와 calculateMBTI 유틸리티를 활용해 MBTI 테스트 기능을 구현.

- 테스트 페이지 구현:
  사용자가 MBTI 테스트를 진행할 수 있는 페이지를 구현하고, 테스트 완료 후 결과를 모달 또는 별도의 페이지로 표시하도록 UI 구성.

- JSON 서버 셋업 및 API 연결:
  json-server를 설치하고 db.json 파일을 작성하여 테스트 결과를 CRUD 할 수 있는 API를 구성.

- 테스트 결과 저장 및 API 연결:
  테스트 완료 시 결과를 JSON 서버에 저장하고, 이를 기반으로 데이터를 생성하는 API를 연결.

- 테스트 결과 리스트 구성:
  TestResultList 페이지를 구현하여, JSON 서버에 저장된 테스트 결과를 리스트로 렌더링.
  본인 소유의 결과에 대해 공개 여부 변경 및 삭제 기능을 제공.

- 로그인 유지 기능:
  localStorage에 JWT 토큰을 저장하여, 새로고침 후에도 사용자 로그인 상태를 복원하는 기능 구현.

- Axios Instance 사용:
  Axios 인스턴스를 생성하여 API 호출을 일원화하고, 코드의 재사용성과 유지보수성을 향상.

- 반응형 디자인:
  Tailwind CSS의 반응형 유틸리티를 활용하여 모바일, 태블릿, 데스크탑 등 다양한 화면 크기에서 UI를 제공.
