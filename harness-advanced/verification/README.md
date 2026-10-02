# 검증 루프

교안: [검증](https://abc.noco.kr/harness-advanced/verification). 대응 절은 **TDD로 회귀를 막기**, **버그를 다음 작업에 반영하기**다.

Node.js 24와 pnpm 10을 사용한다. 교안의 빈 이름 테스트를 Node 내장 테스트 러너에서 실행할 수 있는 JavaScript로 제공한다. `it`은 `node:test`, 기대 결과 비교는 `node:assert/strict`를 사용하며 별도 테스트 라이브러리를 설치하지 않는다.

```sh
cd harness-advanced/verification
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm verify
```

## 실패 → 수정 → 재검증

1. `src/example.mjs`에서 빈 이름 검사를 잠시 제거하고 항상 `{ ok: true }`를 반환하게 바꾼다.
2. `pnpm test`로 빈 이름 회귀 테스트가 실패하는지 확인한다.
3. 빈 문자열과 공백만 있는 이름을 거절하는 검사를 복구한다.
4. `pnpm verify`로 테스트 개수, 산출물, 실제 빈 이름 실행 결과를 확인한다.
5. 최종 diff에서 실습과 무관한 변경을 제외한다.

외부 API·계정·실제 사용자 정보는 필요 없다. 산출물 `dist/`는 커밋하지 않는다. 코드는 [MIT](../../LICENSE)다.
