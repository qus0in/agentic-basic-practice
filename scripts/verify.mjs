import { spawnSync } from 'node:child_process'
import assert from 'node:assert/strict'
import { projects } from './projects.mjs'
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
for (const cwd of ['.', ...projects]) {
  const command = cwd === '.' ? 'test' : 'verify'
  const result = spawnSync(pnpm, [command], { cwd, encoding: 'utf8', shell: process.platform === 'win32' })
  process.stdout.write(result.stdout || '')
  process.stderr.write(result.stderr || '')
  assert.equal(result.status, 0, `${cwd}: ${command} failed`)
  if (cwd === '.') assert.match(result.stdout, /# tests [1-9][0-9]*/)
  else assert.match(result.stdout, /VERIFY_OK/)
}
console.log('VERIFY_OK: repository checks complete')
