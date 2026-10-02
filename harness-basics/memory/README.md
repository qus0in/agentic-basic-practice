# memory 실습

교안: [memory](https://abc.noco.kr/harness-basics/memory). 「런타임이 남기는 기억」·「기억과 승격 기준」의 색인과 개별 파일 관계를 관찰하는 실습이다.

```sh
cd harness-basics/memory
pnpm test
pnpm verify
cat memory/MEMORY.md
cat memory/promotion.md
```

이 폴더는 저장 구조를 관찰하는 연습용 복제본이다. 런타임의 실제 홈 디렉터리에 복사하지 않고 자동 메모리를 켜지 않는다. 색인 링크가 실제 파일로 열리는지, 공유 후보가 현재 명령·경로와 대조됐는지 확인한다. API 키·개인 취향·계정 정보를 실제로 수집하지 않는다. 팀 공통 규칙의 승격은 사람의 검토 뒤에 한다.

`pnpm verify`는 테스트 개수와 파일의 기대 상태를 확인한다. 실행 결과는 실행 후 기록한다.
