# 교안 실습 검증 · start

교안: [교안 실습 검증](https://abc.noco.kr/cases/practice-check). 대응 절은 **검증 스크립트 만들기**, **실행 환경 맞추기**, **통과 후 남는 문제**다.

Node.js 24와 pnpm 10이 필요하다. 저장소 루트에서 이 폴더로 이동한다.

```sh
cd cases/practice-check/start
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm verify
```

`src/example.mjs`는 주문 금액 계산 예제다. `scripts/verify.mjs`는 교안과 같은 설치 → 테스트 → 빌드 순서로 실행한다. 종료 코드에 더해 테스트 개수, 산출물 존재·내용, 주문 예제의 JSON 출력까지 확인한다. `dist/`는 실행 중 생성하며 커밋하지 않는다.

먼저 기존 검사를 읽는다. 음수 가격과 수량 0 경계값에 대한 테스트를 추가하고 done 폴더와 비교한다.

## 선택: Linux 환경에서 실행

이 폴더에서 다음 교안 명령을 실행한다. Docker가 설치되고 daemon이 실행 중이어야 한다.

```sh
docker run --rm -v "$PWD:/app" -v /app/node_modules -w /app node:24 \
  sh -c "corepack enable && pnpm install --frozen-lockfile && pnpm verify"
```

Node 메이저를 맞추는 실행이며 Windows·macOS의 셸 동작을 검증하지는 않는다. 로컬 검증과 Docker 검증을 같은 결과로 가정하지 않는다. 오류 기록에는 명령·버전·실패 단계만 남기고 개인 정보를 제외한다.

코드는 [MIT](../../../LICENSE)이며 외부 API와 계정은 사용하지 않는다.
