import assert from 'node:assert/strict'
import { readFileSync, readlinkSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
export function check() {
  const example = readFileSync('.env.example', 'utf8')
  for (const line of example.split('\n').filter(l => l && !l.startsWith('#'))) assert.match(line, /^[A-Z_]+=\s*$/)
  const ignored = spawnSync('git', ['check-ignore', '--no-index', '.env', '.env.production'], { encoding: 'utf8' })
  assert.equal(ignored.status, 0)
  assert.deepEqual(ignored.stdout.trim().split('\n'), ['.env', '.env.production'])
  assert.equal(spawnSync('git', ['check-ignore', '--no-index', '.env.example']).status, 1)
  assert.match(readFileSync('.gitignore', 'utf8'), /!\.env\.example/)
}
export function nonempty(text) { assert.ok(text.trim().length > 0) }
