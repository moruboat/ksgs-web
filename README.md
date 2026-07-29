# KSGS 웹사이트 (v2 — 구성계획 v3 반영)

주식회사 케이에스금상(KSGS) 소개 웹사이트입니다. 순수 HTML5/CSS3/바닐라 JS로 제작되어
별도 빌드 과정 없이 GitHub Pages에 바로 배포할 수 있습니다.

## 이전 버전과 달라진 점

- 사업분야 5개 → **주요사업 3개**로 재구성: 선체 청락도장(통합) / 철의장 / 함정 인테리어
- 기술개발(R&D), 인증현황, 협력사 페이지 삭제 — 자격증·인증 정보는 회사소개 페이지에 통합
- 글로벌 사업(미해군 진출) 페이지 보류 — 추후 요청 시 추가
- 전체 8페이지 → **5페이지**로 축소: 홈 / 회사소개 / 주요사업 / 시공실적 / 문의

## 구성

- index.html — 홈
- about.html — 회사소개 (회사개요, 연혁, 자격증·인증, 오시는 길)
- business.html — 주요사업 (선체 청락도장 / 철의장 / 함정 인테리어)
- references.html — 시공실적 (해군, 해경, 시공사례 갤러리)
- contact.html — 문의 (영업 문의 + 견적 요청 통합 폼, Formspree 연동)
- css/style.css — 공통 스타일 (네이비 #0B1E3D / 골드 #C9A84C)
- js/main.js — 모바일 메뉴 토글
- js/contact.js — 문의 폼 전송 처리

## 나중에 채워야 할 항목

1. **배경 이미지** — `assets/images/` 폴더에 아래 파일명으로 넣으면 자동 반영됩니다.
   - hero-bg.jpg, about-bg.jpg, business-bg.jpg, references-bg.jpg, contact-bg.jpg
2. **연락처 정보** — "추후 입력" 표시된 부분(주소/전화/이메일)을 실제 정보로 교체
3. **문의 폼 연동** — js/contact.js의 `FORM_ENDPOINT`를 Formspree 발급 URL로 교체
4. **시공실적 연도** — references.html 표의 "추후 입력" 연도를 확정된 값으로 채우기
5. **회사 연혁, 시공사례 사진, 로고 파일, 도메인** — 기획안 콘텐츠 체크리스트상 미확보 항목

## GitHub Pages 배포

1. 이 폴더 전체를 GitHub 저장소에 업로드
2. 저장소 Settings → Pages → Branch를 main(또는 원하는 브랜치)으로 설정
3. 몇 분 후 `https://[사용자명].github.io/[저장소명]/` 으로 접속 가능
