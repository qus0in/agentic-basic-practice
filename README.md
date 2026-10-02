# 교안 페이지 ↔ 폴더

| 교안 페이지 | 실습 폴더 | 제공 상태 |
|---|---|---|
| [교안 실습 검증](https://abc.noco.kr/cases/practice-check) | [start·done](cases/practice-check/README.md) | 로컬 검토 초안 |
| [검증](https://abc.noco.kr/harness-advanced/verification) | [verification](harness-advanced/verification/README.md) | 로컬 검토 초안 |

AI 에이전트와 함께 교안의 검증 절차를 실행하는 공개 실습 저장소다. Node.js 24와 pnpm 10을 사용한다. 공개·MIT·템플릿 저장소로 제공할 계획이며, 현재는 사용자 검토를 위한 로컬 초안이다. 원격 저장소·태그는 아직 만들지 않았다.

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm verify
```

`test`는 테스트를 실행하고, `verify`는 기대 결과와 산출물까지 검사한다. 각 실습은 폴더의 README에서 시작한다. `start`와 `done`은 브랜치가 아니라 폴더로 구분한다.

## 버전과 라이선스

교안 `vX.Y.Z`에 대응하는 실습 태그는 `practice-vX.Y.Z`다. 교안에서는 존재하는 태그의 파일로 연결한다. 작업 중인 실습은 PR에서 검토하며, main 변경은 최초 골격 이후 PR 병합으로만 반영한다.

코드는 [MIT](LICENSE)로 제공한다. 직접 의존성과 실행 도구의 고지는 [THIRD_PARTY.md](THIRD_PARTY.md)에 있다. 계정·API 키는 필요하지 않다.
