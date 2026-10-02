import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
test('settings: nonempty tests and expected state verified', () => {
  const env = { ...process.env }; delete env.NODE_TEST_CONTEXT
  const result = spawnSync('pnpm', ['verify'], { cwd: 'harness-basics/settings', env, encoding: 'utf8' })
  assert.equal(result.status, 0, result.stdout + result.stderr)
  assert.match(result.stdout, /# tests [1-9][0-9]*/)
  assert.match(result.stdout, /# fail 0/)
  assert.match(result.stdout, /VERIFY_OK/)
})
