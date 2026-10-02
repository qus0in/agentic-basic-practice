import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
test('slides: install frozen dependencies and verify real build', () => {
  const env = { ...process.env, PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD: '1', CI: 'true' }; delete env.NODE_TEST_CONTEXT
  const cwd = 'cases/slides'
  for (const args of [['install', '--frozen-lockfile'], ['verify']]) {
    const result = spawnSync('pnpm', args, { cwd, env, encoding: 'utf8' })
    assert.equal(result.status, 0, result.stdout + result.stderr)
    if (args[0] === 'verify') {
      assert.match(result.stdout, /# tests [1-9][0-9]*/)
      assert.match(result.stdout, /VERIFY_OK/)
    }
  }
})
