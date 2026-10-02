# 프롬프트 실습

교안: [컨텍스트와 프롬프트](https://abc.noco.kr/concepts/context-prompt)의 「제로샷·퓨샷 비교」에 쓰인 로그인 오류 변경을 공통 과제로 삼는다. 프롬프트 실습 페이지는 교안 연결 PR에서 추가한다.

```sh
cd practice/prompt-lab
pnpm test
pnpm verify
cat prompts/01-zero-shot.txt
```

| 실험 | 복사할 파일 |
|---|---|
| ① 제로샷 | `01-zero-shot.txt` |
| ② 역할 | `02-role.txt` |
| ③ 출력 형식 | `03-format.txt` |
| ④ 예시 0/1/2/3개 | `04-few-shot-0.txt` ~ `04-few-shot-3.txt` |
| ⑤ 부정 지시 | `05-negative.txt` |

한 파일의 전체 내용을 선택한 모델의 새 대화에 붙여 넣는다. 같은 조건으로 최소 두 번 실행한다. 기록은 [records](records/README.md)의 빈 template에서 시작한다. 개인 API 키를 공유하거나 프롬프트에 넣지 않는다. 이 폴더의 검증은 모델 API를 호출하지 않는다.

```sh
# 실행한 두 원문 파일을 개인 작업 사본에 저장한 뒤 실행한다.
pnpm compare records/run-1.txt records/run-2.txt
```

출력은 형식 준수 / 금지 항목 없음 / 길이 / 두 번 돌려 같은가의 네 열로 비교한다. 실제 출력이 없는 상태를 예측 결과로 채우지 않는다. 테스트의 문자열은 검사기용 합성 fixture이며 모델 결과가 아니다.
