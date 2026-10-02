import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { projects } from '../scripts/projects.mjs'
test('repository has MIT license and public teaching map', () => {
  assert.match(readFileSync('LICENSE', 'utf8'), /MIT License/)
  assert.match(readFileSync('README.md', 'utf8'), /교안 페이지 ↔ 폴더/)
})
const childEnv = { ...process.env }
delete childEnv.NODE_TEST_CONTEXT
for (const cwd of projects) test(`${cwd}: nonempty test suite passes`, () => {
  const result = spawnSync(process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm', ['test'], { cwd, env: childEnv, encoding: 'utf8', shell: process.platform === 'win32' })
  assert.equal(result.status, 0, result.stdout + result.stderr)
  assert.match(result.stdout, /# tests [1-9][0-9]*/)
  assert.match(result.stdout, /# fail 0/)
})
