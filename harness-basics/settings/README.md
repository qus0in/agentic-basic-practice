# settings 실습

교안: [settings](https://abc.noco.kr/harness-basics/settings). 「Claude Code」의 attribution 예시를 읽고 적용 범위를 구분하는 실습이다.

```sh
cd harness-basics/settings
pnpm test
pnpm verify
cat settings.example.json
```

교안의 `{ "attribution": false }`를 보관하는 예시 파일이다. 실제 전역 설정을 바꾸지 않는다. 허용된 키가 하나이고 boolean false인지 검사한다. 적용하려면 현재 런타임의 공식 설정 문서를 확인한 뒤 프로젝트 범위에서 판단한다. attribution 문법의 런타임·버전 차이를 이 검증이 보장하지 않는다. permission 자동 승인 설정은 포함하지 않았다.

`pnpm verify`는 테스트 개수와 파일의 기대 상태를 확인한다. 실행 결과는 실행 후 기록한다.
