# security 실습

교안: [security](https://abc.noco.kr/harness-basics/security). 「비밀값은 환경 변수로」의 커밋 제외 목록과 비어 있는 예시 파일을 확인하는 실습이다.

```sh
cd harness-basics/security
pnpm test
pnpm verify
git check-ignore --no-index .env .env.production
git check-ignore --no-index .env.example
```

첫 명령은 두 경로를 출력하고, 마지막 명령은 출력 없이 exit 1이어야 한다. 실제 비밀값은 필요하지 않다. `.env.example`의 값은 모두 빈 문자열이며 키 이름과 용도만 남긴다. 이 검사는 git 추적 제외를 확인할 뿐 읽기 권한·셸 접근을 막는 샌드박스가 아니다. 교안의 의사 permissions 설정은 복사하지 않았다.

`pnpm verify`는 테스트 개수와 파일의 기대 상태를 확인한다. 실행 결과는 실행 후 기록한다.
