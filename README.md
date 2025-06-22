# 📝 React Task App

Vite 기반의 React 프로젝트로, Firebase Hosting에 GitHub Actions를 이용해 자동 배포되는 작업 관리 앱입니다.

---

## 🚀 배포 방식: Firebase + GitHub Actions

### ✅ 동작 원리

- `main` 브랜치에 **push** → GitHub Actions가 실행되어 **Firebase Hosting 자동 배포**
- **Pull Request 생성 시** → Preview 채널을 통해 **임시 URL 배포**

### 📁 관련 설정 파일

| 경로                                                  | 설명                                  |
| ----------------------------------------------------- | ------------------------------------- |
| `.github/workflows/firebase-hosting-merge.yml`        | main 브랜치에 머지 시 자동 배포       |
| `.github/workflows/firebase-hosting-pull-request.yml` | PR 생성 시 Preview 채널 배포          |
| `firebase.json`                                       | Firebase Hosting 경로 및 rewrite 설정 |
| `.firebaserc`                                         | Firebase 프로젝트 ID 설정             |

---

## 🔐 GitHub Secrets 설정

GitHub → Settings → Secrets and variables → Actions 탭에 아래 키를 등록해야 합니다:

| 이름                                      | 설명                                    |
| ----------------------------------------- | --------------------------------------- |
| `FIREBASE_SERVICE_ACCOUNT_REACT_TASK_APP` | Firebase 서비스 계정 키(JSON 파일 내용) |
| `GITHUB_TOKEN`                            | GitHub 제공 기본 토큰 (별도 설정 X)     |

---

## 🔧 주요 기능 소개

- 🎯 **다중 게시판 지원**

  - 상단 탭으로 여러 게시판 생성 및 전환 가능
  - 게시판마다 별개의 리스트와 작업(Task) 관리

- 📝 **리스트(List) 기능**

  - 각 게시판 안에 여러 리스트 추가 가능
  - 리스트 단위로 작업(Task)을 분류하여 관리
  - 리스트 삭제 가능

- ✅ **작업(Task) 관리**

  - 리스트마다 작업(Task) 추가 및 삭제
  - 리스트가 비어 있을 경우 안내 문구 출력

- 📦 **Drag & Drop 정렬**

  - 리스트 간 작업(Task) 이동
  - 작업 순서 변경 지원

- ⚙️ **Redux 기반 전역 상태 관리**

  - Redux Toolkit 사용
  - 게시판, 리스트, 작업 상태 일괄 관리

- 💡 **TypeScript로 타입 안정성 확보**
  - 컴포넌트 Props, 상태 값에 명확한 타입 지정

---

## 🧱 개발 환경

- React 18
- TypeScript
- Vite
- Redux Toolkit
- ESLint (기본 설정 포함)
- Firebase Hosting
- GitHub Actions (CI/CD)

---

## 🔗 배포 주소

👉 [https://react-task-app-ae979.web.app](https://react-task-app-ae979.web.app)

---

## 📸 프로젝트 화면

### ▶ 로그인 후 보드 화면

![로그인 후 보드 화면](https://github.com/user-attachments/assets/edf72b99-08ae-41cc-8f34-2c53b899c67c)
