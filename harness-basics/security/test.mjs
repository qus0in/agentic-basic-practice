import { test } from 'node:test'
import assert from 'node:assert/strict'
import { check, nonempty } from './checks.mjs'
test('files and expected behavior agree with teaching example', check)
test('empty evidence is rejected', () => assert.throws(() => nonempty('  ')))
