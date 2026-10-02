import assert from 'node:assert/strict'
import { readFileSync, readlinkSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
export function check() {
  const config = JSON.parse(readFileSync('settings.example.json', 'utf8'))
  assert.deepEqual(config, { attribution: false })
  assert.equal(Object.keys(config).length, 1)
  assert.match(readFileSync('README.md', 'utf8'), /실제 전역 설정을 바꾸지 않는다/)
}
export function nonempty(text) { assert.ok(text.trim().length > 0) }
