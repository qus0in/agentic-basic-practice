import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
const prompts = readdirSync('prompts').filter(p => p.endsWith('.txt'))
assert.equal(prompts.length, 8)
for (const name of prompts) assert.match(readFileSync('prompts/' + name, 'utf8'), /로그인 실패 시 오류 메시지/)
assert.equal(readFileSync('prompts/01-zero-shot.txt', 'utf8'), readFileSync('prompts/04-few-shot-0.txt', 'utf8'))
for (let n = 0; n < 4; n++) assert.equal([...readFileSync(`prompts/04-few-shot-${n}.txt`, 'utf8').matchAll(/^메시지: /gm)].length, n)
const template = JSON.parse(readFileSync('records/template.json', 'utf8'))
assert.equal(template.status, '실행 후 기록')
assert.deepEqual(template.outputs, [null, null])
assert.ok(Object.values(template.checks).every(value => value === null))
console.log('VERIFY_OK: eight prompts, four few-shot counts and empty result template checked')
