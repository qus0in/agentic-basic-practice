import { test } from 'node:test'
import assert from 'node:assert/strict'
import { inspect } from './compare.mjs'
// Synthetic fixtures only: these strings are not generated model results.
test('comparison fills all four columns', () => {
  const result = inspect('fix(auth): 오류 표시', 'fix(auth): 오류 표시')
  assert.deepEqual(Object.keys(result), ['형식 준수', '금지 항목 없음', '길이', '두 번 돌려 같은가'])
  assert.deepEqual(result['형식 준수'], [true, true])
  assert.equal(result['두 번 돌려 같은가'], true)
})
test('extra explanation, prohibited word and differing runs are detectable', () => {
  const result = inspect('fix(auth): 항상 표시', '설명\nfix(auth): 오류 표시')
  assert.deepEqual(result['형식 준수'], [true, false])
  assert.deepEqual(result['금지 항목 없음'], [false, true])
  assert.equal(result['두 번 돌려 같은가'], false)
})
