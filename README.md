# 📝 React Task App

Vite 기반의 React 프로젝트로, GitHub Actions를 활용해 Firebase Hosting에 자동 배포됩니다.

## 🔥 Firebase Hosting + GitHub Actions 배포 자동화

본 프로젝트는 `React + TypeScript + Vite`로 구성되었으며, `Firebase Hosting`을 통해 배포됩니다.

### 🛠️ 배포 방식

- `main` 브랜치에 **push** 시 GitHub Actions가 실행되어 자동으로 Firebase에 배포됩니다.
- **PR(pull request)** 시에는 Firebase Preview 채널을 통해 임시 URL로 미리보기 배포가 됩니다.

### 🧩 주요 파일

| 파일 위치                                             | 설명                                  |
| ----------------------------------------------------- | ------------------------------------- |
| `.github/workflows/firebase-hosting-merge.yml`        | `main` 브랜치 배포 자동화 설정        |
| `.github/workflows/firebase-hosting-pull-request.yml` | PR 시 미리보기 채널 배포 설정         |
| `firebase.json`                                       | Firebase Hosting 경로 및 rewrite 설정 |
| `.firebaserc`                                         | Firebase 프로젝트 ID 지정             |

---

## ⚙️ 사전 설정

GitHub Repository → `Settings` → `Secrets and variables` → `Actions`에 아래 값을 등록해야 합니다:

| 키                                        | 설명                                      |
| ----------------------------------------- | ----------------------------------------- |
| `FIREBASE_SERVICE_ACCOUNT_REACT_TASK_APP` | Firebase 서비스 계정 키(JSON)             |
| `GITHUB_TOKEN`                            | GitHub에서 자동 제공됨 (별도 설정 불필요) |

---

## 🔧 주요 기능

- 📌 **다중 게시판 관리**

  - 상단 탭으로 여러 개의 게시판(Board)을 생성 및 전환
  - 게시판별로 고유한 리스트와 할 일(Task) 관리

- ✅ **할 일(Task) 등록 및 삭제**

  - 각 리스트(List)에 할 일(Task)을 추가하고 삭제할 수 있음
  - 빈 리스트에는 안내 문구 출력

- 📝 **리스트(List) 생성 및 삭제**

  - 한 게시판 내 여러 리스트 구성 가능
  - 리스트 단위로 할 일(Task)을 그룹화

- 🧰 **리덕스를 이용한 전역 상태 관리**

  - 게시판 및 리스트, 할 일 상태를 Redux Toolkit으로 통합 관리

- 💻 **타입 안정성 보장**
  - TypeScript 기반으로 Props, 상태 값에 대한 명확한 타입 적용

---

## 🧱 개발 환경

- React 18
- TypeScript
- Vite
- ESLint 설정 포함
- Redux Toolkit
- GitHub Actions (CI/CD)
- Firebase Hosting

---

## 🔗 배포 URL

👉 [https://react-task-app-ae979.web.app](https://react-task-app-ae979.web.app)

--

## 📸 프로젝트 화면

![boardLogin](https://github.com/user-attachments/assets/edf72b99-08ae-41cc-8f34-2c53b899c67c)
