import assert from 'node:assert/strict'
import { readFileSync, readlinkSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
export function check() {
  const index = readFileSync('memory/MEMORY.md', 'utf8')
  const targets = [...index.matchAll(/\]\(([^)]+)\)/g)].map(m => m[1])
  assert.deepEqual(targets, ['preferences.md', 'promotion.md'])
  for (const target of targets) assert.ok(readFileSync(join('memory', target), 'utf8').trim().length > 0)
  assert.match(readFileSync('memory/promotion.md', 'utf8'), /지금 파일과 명령이 존재/)
  assert.match(readFileSync('README.md', 'utf8'), /자동 메모리를 켜지 않는다/)
}
export function nonempty(text) { assert.ok(text.trim().length > 0) }
