import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
export function inspect(text) {
  const headings = [...text.matchAll(/^# (.+)$/gm)].map(m => m[1])
  assert.deepEqual(headings, ['명령 실행과 결과 확인', '직접 실행해 보기', '결과를 확인하기'])
  assert.match(text, /<!-- 여기서 실행 위치와 예상 결과를 먼저 보여 준다\. -->/)
  assert.match(text, /예상한 파일이 생겼는가/)
  return headings
}
test('three slides preserve the teaching order and speaker note', () => inspect(readFileSync('slides.md', 'utf8')))
test('missing check slide is rejected', () => assert.throws(() => inspect('# 직접 실행해 보기')))
