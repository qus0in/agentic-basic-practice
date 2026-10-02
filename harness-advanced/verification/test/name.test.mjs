import { it } from 'node:test'
import assert from 'node:assert/strict'
import { validateName } from '../src/example.mjs'
it('빈 이름은 저장하지 않는다', () => assert.deepEqual(validateName(''), { ok: false }))
it('공백만 있는 이름은 저장하지 않는다', () => assert.deepEqual(validateName('   '), { ok: false }))
it('정상 이름은 허용한다', () => assert.deepEqual(validateName('연습'), { ok: true }))
it('문자열이 아닌 값은 거절한다', () => assert.deepEqual(validateName(null), { ok: false }))
