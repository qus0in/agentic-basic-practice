# skills 실습

교안: [skills](https://abc.noco.kr/harness-basics/skills). 「SKILL.md 구조」·「Agent Skills 공식 사양」·스킬 공유의 폴더와 링크를 확인하는 실습이다.

```sh
cd harness-basics/skills
pnpm test
pnpm verify
cd start
mkdir -p .claude
ln -s ../.agents/skills .claude/skills
ls -l .claude/skills
cat .claude/skills/commit/SKILL.md
```

`done`에는 같은 구조의 완성 링크가 있다. 링크의 대상이 `.agents/skills`인지, 두 경로의 SKILL.md 내용이 같은지 확인한다. frontmatter의 이름은 부모 폴더 `commit`과 같아야 한다. 이 실습은 실제 커밋·push를 실행하지 않는다.

`pnpm verify`는 테스트 개수와 파일의 기대 상태를 확인한다. 실행 결과는 실행 후 기록한다.
