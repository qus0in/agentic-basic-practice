# Slidev 교안 슬라이드

교안: [Slidev 교안 슬라이드](https://abc.noco.kr/cases/slides)의 「원고에서 최종 파일까지」 1~4절이다. `slides.md`는 설명·실습·확인 3장과 발표자 노트의 원고다. 개인 계정이나 API 키는 쓰지 않는다.

```sh
cd cases/slides
pnpm install --frozen-lockfile
pnpm test
pnpm verify
pnpm dev
```

`verify`는 테스트, 실제 Slidev 빌드, HTML 산출물을 확인한다. 브라우저에서 1~3장을 넘기며 순서와 글 잘림을 확인한다. 테스트 성공은 PDF·PPTX가 완성됐다는 뜻이 아니다.

Twoslash의 클라이언트가 기대하는 컴포넌트 구조와 맞추기 위해 FloatingVue는 5.2.2로 고정했다. lockfile을 유지하며 업데이트 후 브라우저 콘솔도 다시 확인한다.

## 내보내기

교안과 같은 명령을 쓴다. 필요한 `playwright-chromium`은 개발 의존성에 포함했다. Chromium은 최초 설치 시 내려받는다. 브라우저 다운로드를 생략했다면 `pnpm exec playwright install chromium`으로 설치한다.

```sh
pnpm exec slidev export
pnpm exec slidev export --format pptx
pnpm exec slidev export --format pptx-editable
```

출력 파일은 커밋하지 않는다. PDF는 글 잘림, PPTX는 실제 발표 환경의 글꼴·줄바꿈을 확인한다. 내보내기 지원과 제한은 [공식 안내](https://sli.dev/guide/exporting)에서 확인한다. 실행 결과는 직접 실행한 뒤 기록한다.
