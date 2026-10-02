# rules 실습

교안: [rules](https://abc.noco.kr/harness-basics/rules). 「룰에 넣을 것」·「로컬·전역 룰 구분」의 AGENTS.md와 심볼릭 링크 실습이다.

```sh
cd harness-basics/rules
pnpm test
pnpm verify
cd start
ln -s AGENTS.md CLAUDE.md
ls -l AGENTS.md CLAUDE.md
```

`done/CLAUDE.md`는 `AGENTS.md`를 가리키는 완성 예시다. start에서 직접 링크를 만들면 두 이름의 내용이 같은지 비교한다. 두 번째 `ln -s`는 기존 링크 때문에 실패해야 한다. `ln -sf`로 덮어쓰지 않는다. start의 연습 링크는 gitignore로 제외했다. 테스트는 임시 폴더에서 같은 명령을 실행하고 종료 후 정리한다.

`pnpm verify`는 테스트 개수와 파일의 기대 상태를 확인한다. 실행 결과는 실행 후 기록한다.
