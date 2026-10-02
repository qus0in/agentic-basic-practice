# 직접 의존성과 실행 도구

루트 검증 스크립트에는 직접 런타임·개발 패키지 의존성이 없다. Node.js 내장 모듈만 사용한다. 실습별 개발 의존성은 아래에 따로 적는다. 아래 도구는 별도로 설치하며 이 저장소에 배포본을 포함하지 않는다.

| 패키지·도구 | 버전 | 라이선스 | 쓰임 |
|---|---|---|---|
| [Node.js](https://nodejs.org/) | 24.x | MIT 및 배포본의 제3자 고지 | 내장 테스트 러너와 스크립트 실행 |
| [pnpm](https://pnpm.io/) | 10.34.6 | MIT | 고정 lockfile 설치·명령 실행 |

도구의 제3자 라이선스는 각 배포본의 고지를 따른다. Docker는 선택적으로 사용하며 설치본·이미지는 포함하지 않는다.

## Slidev 실습의 직접 개발 의존성

| 패키지·도구 | 버전 | 라이선스 | 쓰임 |
|---|---|---|---|
| [@slidev/cli](https://github.com/slidevjs/slidev) | 53.0.0 | MIT | slides.md 개발 서버·빌드·내보내기 |
| [@slidev/theme-default](https://github.com/slidevjs/themes) | 0.25.0 | MIT | 기본 슬라이드 테마 |
| [playwright-chromium](https://github.com/microsoft/playwright) | 1.63.0 | Apache-2.0 | 내보내기용 Chromium 구동 |

각 패키지의 전이 의존성과 Chromium 배포본의 라이선스는 설치본의 고지를 따른다. 원고는 저장소 MIT 라이선스를 따른다.
